import React from 'react';
import './index.less';
import  { OperateInTable }  from 'base-component';

export default () => {
  const items = [
    {
      label: '删除',
      disabled: true,
      onClick: () => console.info('删除'),
    },
    {
      label: '编辑',
      onClick: () => console.info('编辑'),
    },
    {
      label: '查看',
      onClick: () => console.info('查看'),
    },
    {
      label: '禁用',
      onClick: () => console.info('禁用'),
    },
  ];

  const items2 = [
    {
      label: '删除',
      onClick: () => console.info('删除'),
      popconfirmProps: {
        title: 'title',
      },
    },
    {
      label: '编辑',
      onClick: () => console.info('编辑'),
    },
    {
      label: '查看',
      onClick: () => console.info('查看'),
    },
    {
      label: '预览',
      popconfirmProps: {
        title: 'title',
      },
    },
    {
      label: '禁用',
      onClick: () => console.info('禁用'),
    },
    {
      label: '启用',
      onClick: () => console.info('启用'),
    },
  ];
  return (
    <div className="table-operate-test">
      <OperateInTable items={items} count={3} />
      <br />
      <OperateInTable items={items2} />
    </div>
  );
};
