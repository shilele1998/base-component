import React, { useState } from 'react';
import './index.less';
import { Input, ConfigProvider } from 'base-component';

export default () => {
  const [value, setValue] = useState<string>();
  const [value2, setValue2] = useState<string>();
  const [value3, setValue3] = useState<string>();

  return (
    <ConfigProvider>
      <div className="input-test">
        <Input />
        &nbsp;
        <Input value={value} onChange={e => setValue(e.target.value)} trim />
        &nbsp;
        <Input.Search
          value={value2}
          onChange={e => setValue2(e.target.value)}
          trim
        />
        &nbsp;
        <Input.TextArea
          value={value3}
          onChange={e => setValue3(e.target.value)}
          trim
        />
        &nbsp;
        <Input.Password autoComplete="new-password" />
      </div>
    </ConfigProvider>
  );
};
