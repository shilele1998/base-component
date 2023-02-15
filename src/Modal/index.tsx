import React, { FC } from 'react';
import { Modal, ModalProps, Spin } from 'antd';

interface Props extends ModalProps {
  loading?: boolean;
}

const Index: FC<Props> = props => {
  const {
    loading = false,
    children,
    className = '',
    okButtonProps,
    ...restProps
  } = props;

  return (
    <Modal
      className={`modal ${className}`}
      centered
      {...restProps}
      okButtonProps={{
        loading: okButtonProps?.loading || loading,
        ...okButtonProps,
      }}
    >
      <Spin spinning={loading}>{children}</Spin>
    </Modal>
  );
};

export default Index;
