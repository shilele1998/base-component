import React, { useState } from 'react';
import './index.less';
import { UploadFile } from 'antd/es/upload';
import { UploadExcel } from 'base-component';

export default () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  return (
    <div className="upload-excel-test">
      <UploadExcel
        onTemplateDownload={() => {
          console.info('download');
        }}
        fileList={fileList}
        onChange={() => {
          setFileList([
            {
              uid: '-1',
              name: 'image.png',
              status: 'done',
              url:
                'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
          ]);
        }}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      />
    </div>
  );
};
