import React, { FC } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Modal, Result, Image } from 'antd';
import { GetContainer } from 'rc-util/lib/PortalWrapper';

interface File {
  url?: string;
  type?: string;
}

interface Props {
  file: File | null;
  className?: string;
  getContainer?: GetContainer;
  onCancel?: () => void;
}

const Index: FC<Props> = props => {
  const { className = '', file, onCancel, getContainer } = props;

  const previewRender = () => {
    if (file?.type?.includes('audio')) {
      // 音频
      return (
        <audio
          src={file.url}
          controls
          autoPlay
          className="preview-modal-render-item"
        />
      );
    } else if (file?.type?.includes('pdf')) {
      // pdf
      return (
        <embed
          src={file.url}
          className="preview-modal-render-item"
        />
      );
    } else if (file?.type?.includes('officedocument')) {
      // 文档等(excel,ppt,doc)
      return (
        <embed
          className="preview-modal-render-item"
          src={`https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
            file?.url || '',
          )}`}
        />
      );
    } else {
      return (
        <div style={{ background: '#fff', padding: '100px 120px' }}>
          <Result status="warning" title="当前文件不支持预览" />
        </div>
      );
    }
  };

  const modalRender = () => {
    return (
      <div className="preview-modal-render">
        <div className="preview-modal-render-operations">
          <CloseOutlined onClick={onCancel} />
        </div>
        {previewRender()}
      </div>
    );
  };

  return file ? (
    file.type?.includes('image') ? (
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup
          preview={{
            visible: !!file,
            getContainer,
            onVisibleChange: (onCancel as unknown) as (
              value: boolean,
              prevValue: boolean,
            ) => void,
          }}
        >
          <Image src={file.url} />
        </Image.PreviewGroup>
      </div>
    ) : (
      <Modal
        className={`preview ${className}`}
        width="100%"
        footer={null}
        title={null}
        visible={!!file}
        onCancel={onCancel}
        modalRender={modalRender}
        getContainer={getContainer}
      />
    )
  ) : null;
};

export default Index;
