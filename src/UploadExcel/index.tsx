import React, { ReactNode } from 'react';
import { Upload, message } from 'antd';
import {
  RcFile,
  UploadProps,
  UploadFile,
  UploadChangeParam,
} from 'antd/es/upload';

type BeforeUploadValueType = void | boolean | string | Blob | File;

interface Props<T> extends Omit<UploadProps<T>, 'onChange'> {
  className?: string;
  checkFile?: boolean;
  onTemplateDownload?: () => void;
  size?: number; // 文件大小 单位M
  title?: ReactNode;
  describtion?: ReactNode;
  uploadIcon?: ReactNode;
  onChange?: (
    fileList: UploadFile[],
    info: UploadChangeParam<UploadFile<T>>,
  ) => void;
}

function Index<T>(props: Props<T>) {
  const {
    className = '',
    size = 2,
    checkFile = true,
    onTemplateDownload,
    describtion,
    title,
    beforeUpload,
    onChange,
    uploadIcon,
    onDrop,
    ...restProps
  } = props;

  const defaultUploadProps = {
    accept: '.xlsx,.xls',
    showUploadList: false,
    maxCount: 1,
  };

  const handleBeforeUpload = async (file: RcFile, fileList: RcFile[]) => {
    let result: BeforeUploadValueType | Promise<BeforeUploadValueType> = true;
    const isLtSize = file.size / 1024 / 1024 < size;
    const fileFormat = file?.name?.split?.('.')?.pop();
    const accept = restProps?.accept || defaultUploadProps.accept;
    const canUploadFile = fileFormat && accept.includes(fileFormat);
    if (!canUploadFile) {
      message.error(`文件格式必须为${accept.split(',').join('/')}`);
      return false;
    }
    if (!isLtSize) {
      message.error(`文件大小必须小于${size}M`);
      return false;
    }
    if (beforeUpload) {
      result = await beforeUpload(file, fileList);
    }
    return isLtSize && canUploadFile ? result : Promise.reject(true);
  };

  const handleChange: UploadProps['onChange'] = info => {
    if (info.file.status && info.file.status !== 'error') {
      onChange?.(info.fileList, info);
    }
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    const fileName = event.dataTransfer.files[0].name;
    if (!fileName.endsWith('.xlsx') && !fileName.endsWith('.xls')) {
      message.error(`文件格式必须为.xlsx/.xls`);
    }
    if (onDrop) {
      await onDrop(event);
    }
  };

  return (
    <div className={`upload-excel ${className}`}>
      <Upload.Dragger
        {...defaultUploadProps}
        {...restProps}
        beforeUpload={checkFile ? handleBeforeUpload : beforeUpload}
        onChange={handleChange}
        onDrop={checkFile ? handleDrop : onDrop}
      >
        {uploadIcon || (
          <svg style={{ width: '50px', height: '50px', color: '#8E9198' }}>
            <use href="#upload">
              <symbol id="upload" viewBox="0 0 24 24">
                <path
                  data-follow-fill="currentColor"
                  fill="currentColor"
                  d="M12 4.5a4 4 0 0 0-4 4V9a.5.5 0 0 1-.5.5H7a4 4 0 0 0 0 8h.5a1 1 0 1 1 0 2H7a6 6 0 0 1-.929-11.929 6.001 6.001 0 0 1 11.858 0A6.001 6.001 0 0 1 17 19.5h-.5a1 1 0 1 1 0-2h.5a4 4 0 0 0 0-8h-.5A.5.5 0 0 1 16 9v-.5a4 4 0 0 0-4-4Zm3.196 11.027c-.21 0-.398-.094-.585-.235l-1.664-1.663v7.404c0 .209-.093.394-.234.58-.117.14-.328.233-.562.233-.21 0-.398-.093-.585-.233a.822.822 0 0 1-.235-.58v-7.388l-1.663 1.647c-.21.211-.492.281-.796.211a.865.865 0 0 1-.586-.585.783.783 0 0 1 .211-.797l2.787-2.787a1.174 1.174 0 0 1 1.64 0l2.787 2.787a.8.8 0 0 1 .164.867c-.023.328-.351.539-.679.539Z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </symbol>
            </use>
          </svg>
        )}
        <div className="upload-excel-container">
          <p>{title || '点击或将文件拖拽到这里上传'}</p>
          <p>{describtion || '仅支持上传Excel文件，数据不能超过5万条'}</p>
        </div>
      </Upload.Dragger>
      {onTemplateDownload && (
        <div
          className="upload-excel-template"
          onClick={onTemplateDownload}
        >
          <span style={{ color: '#8E9198' }}>
            <svg style={{ width: '50px', height: '50px' }}>
              <use href="#excel-o">
                <symbol id="excel-o" viewBox="0 0 24 24">
                  <path
                    data-follow-fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 1.5a4 4 0 0 0-4 4v13a4 4 0 0 0 4 4h11a4 4 0 0 0 4-4V8.068a4 4 0 0 0-1.037-2.687l-2.33-2.568A4 4 0 0 0 15.172 1.5H6.5Zm-2 4a2 2 0 0 1 2-2h8.67a2 2 0 0 1 1.482.656l2.33 2.568a2 2 0 0 1 .518 1.344V18.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-13ZM9 8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a1 1 0 1 0 0-2H10v-2h4.5a1 1 0 1 0 0-2H10v-2h4.5a1 1 0 1 0 0-2H9Z"
                    fill="currentColor"
                  />
                </symbol>
              </use>
            </svg>
          </span>
          <p>Excel模板</p>
          <a>点击下载</a>
        </div>
      )}
    </div>
  );
}

export default Index;
