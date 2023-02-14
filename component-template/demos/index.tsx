import React from 'react';
import './index.less';
import  ConfigProvider from '../../src/ConfigProvider';
import  template from '../../src/ConfigProvider';

export default () => {
  return (
    <ConfigProvider>
      <div className="ka-component-{{template}}-test">
        <{template} />
      </div>
    </ConfigProvider>
  );
};
