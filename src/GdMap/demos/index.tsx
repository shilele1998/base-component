import React from 'react';
import './index.less';
import { GdMap, ConfigProvider } from 'management-platform-base-component';

export default () => {

  return (
    <ConfigProvider>
      <div className="gd-map-test">
        <GdMap
          value={{
            name: '壹方城购物中心',
            district: '广东省深圳市宝安区',
            address: '广东省深圳市宝安区新安街道新安湖社区新湖路99号',
            location: {
              latitude: 22.5607040000,
              longitude: 113.8900580000,
            },
          }}
          amapkey="18865ca97dbadf9e2af68317f537b05a"
          // readonly
        />
      </div>
    </ConfigProvider>
  );
};
