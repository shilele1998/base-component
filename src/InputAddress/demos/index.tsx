import React, { useState } from 'react';
import './index.less';
import { InputAddress } from 'base-component';

export default () => {
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
    <div className="input-address-test">
      <InputAddress
        value={value}
        onChange={setValue}
        amapkey="238893fdd03ee290010024f49b420fad"
      />
    </div>
  );
};
