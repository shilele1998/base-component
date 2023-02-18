import React, { FC, useState } from 'react';
import Input from '../Input';
import AdressModal from '../GdMap';
import { EnvironmentOutlined } from '@ant-design/icons';

interface Value {
  address: string;
  location: Location;
  district: string;
  name: string;
}

interface Location {
  longitude: number;
  latitude: number;
}

interface Props {
  className?: string;
  amapkey: string;
  value?: Value;
  modalTitle?: string;
  onChange?: (value: Value) => void;
  bordered?: boolean;
  readonly?: boolean;
}

// 不要使用navigator.geolocation.getCurrentPosition获取当前坐标，各个浏览器获取的经纬度经纬度不同

const Index: FC<Props> = props => {
  const {
    className = '',
    value,
    bordered = true,
    modalTitle,
    onChange,
    amapkey,
    readonly = false,
  } = props;
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(true);

  return (
    <>
      <Input
        className={`input-address ${className}`}
        placeholder="请输入"
        value={`${value?.district || ''}${value?.address || ''}`}
        addonAfter={bordered && <EnvironmentOutlined onClick={handleClick} />}
        readOnly
        bordered={bordered}
        onClick={handleClick}
      />
      {visible && (
        <AdressModal
          visible={visible}
          readonly={readonly}
          onCancel={() => setVisible(false)}
          amapkey={amapkey}
          onChange={onChange}
          value={value}
          title={modalTitle}
        />
      )}
    </>
  );
};

export default Index;
