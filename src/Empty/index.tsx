import React, { FC } from 'react';
import { Empty, Typography } from 'antd';
import { EmptyProps } from 'antd/lib/empty';

interface Props extends EmptyProps {
  title: string;
}

const Index: FC<Props> = props => {
  const {
    className = '',
    title,
    description,
    image,
    children,
    ...restProps
  } = props;

  return (
    <Empty
      className={`empty ${className}`}
      image={image}
      description={null}
      {...restProps}
    >
      {title && (
        <Typography.Text className="empty-title">
          {title}
        </Typography.Text>
      )}
      {description && (
        <Typography.Text
          type="secondary"
          className="empty-description"
        >
          {description}
        </Typography.Text>
      )}
      {children && (
        <div className="empty-children">{children}</div>
      )}
    </Empty>
  );
};

export default Index;
