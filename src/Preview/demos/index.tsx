import React, { useState } from 'react';
import './index.less';
import { Preview } from 'management-platform-base-component';
import { Button, Space } from 'antd';

interface File {
  url?: string;
  type?: string;
}

export default () => {
  const [file, setFile] = useState<File | null>(null);

  const previewImage = () =>
    setFile({
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      type: 'image/*',
    });

  const previewAudio = () =>
    setFile({
      url: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'audio/mp3',
    });

  const previewPDF = () =>
    setFile({
      url:
        'http://10.202.244.29:19000/cloud-content/132998671393363074.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=smartdo%2F20220726%2Fminio%2Fs3%2Faws4_request&X-Amz-Date=20220726T105525Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5a0495cdc518f765ee282f3c03b85410a0b541770a0edc2484045df6b5b98929',
      type: 'application/pdf',
    });

  const previewDOC = () =>
    setFile({
      url:
        'https://images.tuyacn.com/rms-static/0fdb46e0-670c-11ec-b5fa-7deb2a111a61-1640606204494.docx?tyName=word%E6%96%87%E6%A1%A3%E7%A4%BA%E4%BE%8B.docx',
      type: 'officedocument',
    });

  const previewUnknown = () => setFile({ url: '' });

  const previewExcel = () =>
    setFile({
      url:
        'http://10.202.244.29:19000/cloud-content/132998670768411778.xlsx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=smartdo%2F20220726%2Fminio%2Fs3%2Faws4_request&X-Amz-Date=20220726T105524Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8607c1895b00c4fc64f27fe669794523132a9b73d2e0ed427ca2f7386d0da116',
      type: 'officedocument',
    });

  const previewPPT = () => setFile({ url: '', type: 'officedocument' });

  const onCancel = () => setFile(null);

  return (
    <div className="preview-modal-test">
      <Space>
        <Button type="link" onClick={previewUnknown}>展示不支持文件</Button>
        <Button type="link" onClick={previewImage}>展示图片</Button>
        <Button type="link" onClick={previewAudio}>展示音频</Button>
        <Button type="link" onClick={previewPDF}>展示pdf</Button>
        <Button type="link" onClick={previewDOC}>展示doc</Button>
        <Button type="link" onClick={previewExcel}>展示excel</Button>
        <Button type="link" onClick={previewPPT}>展示ppt</Button>
      </Space>
      <Preview file={file} onCancel={onCancel} title="展示" />
    </div>
  );
};
