import React, { useState } from 'react';
import { Button } from 'antd';
import './index.less';
import { AddressModal, ConfigProvider } from 'base-component';

export default () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({
    name: '壹方城购物中心',
    district: '广东省深圳市宝安区',
    address: '广东省深圳市宝安区新安街道新安湖社区新湖路99号',
    location: {
      latitude: 22.5607040000,
      longitude: 113.8900580000,
    },
  });
  return (
    <ConfigProvider>
      <div className="address-modal-test">
        <Button onClick={() => setVisible(true)}>打开</Button>
        <AddressModal
          visible={visible}
          value={value}
          onChange={setValue}
          onCancel={() => setVisible(false)}
          amapkey="18865ca97dbadf9e2af68317f537b05a"
          readonly
        />
      </div>
    </ConfigProvider>
  );
};
