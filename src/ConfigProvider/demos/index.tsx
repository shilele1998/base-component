import React from 'react';
import './index.less';
import { Pagination, Tabs } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';
import ConfigProvider  from '../index';

export default () => {
  return (
    <div className="ka-component-config-provider-test">
      <ConfigProvider locale={zh_CN}>
        <Tabs>
          <Tabs.TabPane tab="项目 1" key="item-1">
            <Pagination defaultCurrent={6} total={500} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="项目 2" key="item-2">
            内容 2
          </Tabs.TabPane>
        </Tabs>
      </ConfigProvider>
    </div>
  );
};
