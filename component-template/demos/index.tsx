import React from 'react';
import './index.less';
import  { {template} }  from 'management-platform-base-component';

export default () => {
  return (
      <div className="{{template}}-test">
        <{template} />
      </div>
  );
};
