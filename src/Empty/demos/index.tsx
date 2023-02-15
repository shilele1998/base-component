import React from 'react';
import './index.less';
import  { Empty }  from 'base-component';
import { Button } from 'antd';

export default () => {
  return (
    <div className="empty-test">
      <Empty title="暂无项目" description="请选择项目查看详情">
        <Button type="primary" style={{ width: '160px' }}>
          去选择
        </Button>
      </Empty>
    </div>
  );
};
