import React, { FC, useEffect, useState } from 'react';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

type Props = {
  style?: React.CSSProperties;
  IconProps: Partial<CustomIconComponentProps>,
  svgUrl?: string;
  component?:React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | React.ForwardRefExoticComponent<CustomIconComponentProps>;
  useType: string
};

const Index: FC<Props> = (props) => {
  const { IconProps, component, svgUrl, useType,  ...restProps } = props;
  const [ url, setUrl] = useState('');

  useEffect(()=>{
    if (svgUrl) {
      fetch(svgUrl)
      .then(res => res.text())
      .then(text => setUrl(text));
    }
  },[svgUrl]);

  const SvgIcon = (props: { url: string}) => {
    const { url } =props
    return <div {...restProps} dangerouslySetInnerHTML={{ __html: url}}/>;
  };

  return (
    useType === 'url'  ? 
      <SvgIcon url={url} />
      :
      <Icon component={component} {...IconProps} {...restProps}/>
  );
};

export default Index;
