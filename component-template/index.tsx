import React, { FC } from 'react';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Index: FC<Props> = (props) => {
  const { className = "", ...restProps} = props;

  return (
    <div className={`{{template}} ${className}`} {...restProps}>
      demo
    </div>
  );
};

export default Index;
