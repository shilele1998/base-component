import React from 'react';
import './index.less';
import Empty  from '../index';
import { Button } from 'antd';

export default () => {
  return (
    <div className="ka-component-empty-test">
      <Empty image={Empty.IMAGE_PROJECT_COLORFUL} description="暂无项目">
        <Button type="primary">去添加</Button>
      </Empty>
    </div>
  );
};
