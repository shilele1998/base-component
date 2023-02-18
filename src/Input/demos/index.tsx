import React, { useState } from 'react';
import './index.less';
import { Input, ConfigProvider } from 'management-platform-base-component';

export default () => {
  const [value, setValue] = useState<string>();
  const [value2, setValue2] = useState<string>();
  const [value3, setValue3] = useState<string>();

  return (
    <ConfigProvider>
      <div className="input-test">
        <label className='label' htmlFor="base">基本使用:</label>
        <Input id="base"/>
        &nbsp;
        <label className='label' htmlFor="trim">首尾禁止输入空格:</label>
        <Input id="trim" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} trim />
        &nbsp;
        <label className='label' htmlFor="search">带有搜索按钮的输入框:</label>
        <Input.Search
          id="search"
          value={value2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setValue2(e.target.value)}
          trim
        />
        &nbsp;
        <label className='label' htmlFor="textArea">文本域用作多行输入:</label>
        <Input.TextArea
          value={value3}
          id="textArea"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue3(e.target.value)}
          trim
        />
        &nbsp;
        <label className='label' htmlFor="password">密码框:</label>
        <Input.Password  id="password" autoComplete="new-password" />
      </div>
    </ConfigProvider>
  );
};
