import React from 'react';
import './index.less';
import Empty  from '../index';

export default () => {
  return (
    <div className="ka-component-empty-test">
      <Empty
        title="暂无项目"
        description="请选择项目查看详情"
        image={Empty.IMAGE_PROJECT}
      ></Empty>
    </div>
  );
};
