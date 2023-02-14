import React, { FC, useContext } from 'react';
import {ConfigContext} from "../ConfigProvider"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Index: FC<Props> = (props) => {
  const { className = "", ...restProps} = props;
  const { {{template}}: locale } = useContext(ConfigContext)

  return (
    <div className={`ka-component-{{template}} ${className}`} {...restProps}>
      demo
    </div>
  );
};

export default Index;
