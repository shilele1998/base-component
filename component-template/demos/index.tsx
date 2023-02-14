import React from 'react';
import './index.less';
import  { {template} }  from 'base-component';

export default () => {
  return (
      <div className="{{template}}-test">
        <{template} />
      </div>
  );
};
