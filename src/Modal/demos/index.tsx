import React, { useState } from 'react';
import './index.less';
import { Modal, ConfigProvider } from 'base-component';
import { Button } from 'antd';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <ConfigProvider>
      <div className="modal-test">
        <Button type="primary" onClick={() => setVisible(true)}>
          打开
        </Button>
        <Modal
          visible={visible}
          onCancel={() => setVisible(false)}
          title="test"
        >
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
          test
          <hr />
        </Modal>
      </div>
    </ConfigProvider>
  );
};
