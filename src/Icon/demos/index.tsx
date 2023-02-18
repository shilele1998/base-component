import React from 'react';
import  { Icon }  from 'base-component';
import {ReactComponent as MyIcon} from '../tiger.svg';

export default () => {
  return (
      <div className="icon-test">
        <h2># 组件式</h2>
        <Icon 
          useType='comp'
          component={MyIcon}
          IconProps={{style: { fontSize: 100}}}
        />
        <hr></hr>
        <h2># URL地址式</h2>
        <Icon 
          useType='url'
          style= {{ width: 100, height: 100 }}
          svgUrl='https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/tiger.svg'
        />
      </div>
  );
};
