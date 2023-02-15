import React from 'react';
import './index.less';
import { Select, ConfigProvider } from 'base-component';

export default () => {
  return (
    <ConfigProvider>
      <div className="select-test">
        <Select
          style={{ width: '150px' }}
          showSearch={true}
          highlightSearch={true}
          searchWithLabel={true}
          tooltip={true}
          options={[
            { label: '小明对对对对对对的的', value: 'xiaoming' },
            { label: '小王', value: 'xiaowang' },
            { label: '小张', value: 'xiaozhang' },
          ]}
        />
      </div>
    </ConfigProvider>
  );
};
