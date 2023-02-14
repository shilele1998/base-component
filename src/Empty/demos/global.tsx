import React from 'react';
import { TreeSelect, Select, Cascader, Transfer, List } from 'antd';
import  ConfigProvider  from '../../ConfigProvider';

const style = { width: 200 };

const Index = () => {
  return (
    <div>
      <ConfigProvider>
        <div className="config-provider">
          <h4>Select</h4>
          <Select style={style} placeholder="请选择" />

          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} placeholder="请选择" />

          <h4>Cascader</h4>
          <Cascader
            style={style}
            options={[]}
            showSearch
            placeholder="请选择"
          />

          <h4>Transfer</h4>
          <Transfer />

          <h4>Table</h4>

          <h4>List</h4>
          <List />
        </div>
      </ConfigProvider>
    </div>
  );
};

export default Index;
