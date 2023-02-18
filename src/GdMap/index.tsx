import { Map, Marker } from 'react-amap';
import React, { FC, useState, useEffect, ReactNode } from 'react';
import debounce from 'lodash/debounce';
import { Typography, ModalProps } from 'antd';
import Select from '../Select';
import { DefaultOptionType } from 'rc-select/lib/Select';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

interface Value {
  address: string;
  location: Location;
  district: string;
  name: string;
  value?: string;
  label?: ReactNode;
}

interface Location {
  longitude: number;
  latitude: number;
}
interface Props extends ModalProps {
  readonly?: boolean;
  amapkey: string;
  value?: Value;
}

interface OptionsType extends Omit<DefaultOptionType, 'value'>, Value {
  label: ReactNode;
}

// 不要使用navigator.geolocation.getCurrentPosition获取当前坐标，各个浏览器获取的经纬度经纬度不同

const Index: FC<Props> = props => {
  const {
    readonly = false,
    value,
    className = '',
    amapkey,
  } = props;
  const [data, setData] = useState<OptionsType[]>();
  const [nextValue, setNextValue] = useState<Value>();

  useEffect(() => {
    if (value && !data) {
      setData([
        {
          location: value.location,
          address: value?.address,
          name: value?.name,
          district: value?.district,
          label: (
            <Typography.Text>
              {value?.name}
              <Typography.Text type="secondary">
                {value?.district}
                {value?.address}
              </Typography.Text>
            </Typography.Text>
          ),
        },
      ]);
      setNextValue(value);
    }
  }, [value, data]);

  const handleSearch = async (newValue: string) => {
    if (newValue) {
      const response = (
        await axios.get('https://restapi.amap.com/v3/assistant/inputtips', {
          params: {
            keywords: newValue,
            key: amapkey,
            datatype: 'poi',
          },
        })
      ).data;
      if (response.status) {
        const result = response.tips
          .map(_ =>
            _.location &&
            typeof _.location === 'string' &&
            typeof _.address === 'string'
              ? {
                  label: (
                    <Typography.Text>
                      {_.name}
                      <Typography.Text type="secondary">
                        {_.district}
                        {_.address}
                      </Typography.Text>
                    </Typography.Text>
                  ),
                  name: _.name,
                  location: {
                    longitude: _.location.split(',')[0],
                    latitude: _.location.split(',')[1],
                  },
                  district: _.district,
                  address: _.address,
                }
              : null,
          )
          .filter(_ => _);
        setData(result);
      } else {
        setData([]);
      }
    } else {
      setData([]);
    }
  };

  const handleChange = (newValue: string = '') => {
    if (newValue) {
      const nextTip = (data || []).find(_ => _.address === newValue) as Value;
      setNextValue(nextTip);
    }
  };

  const tooltip = (option: DefaultOptionType) => {
    return (
      <Typography className="address-modal-tooltip">
        {option?.name || ''}
        {option?.district || ''}
        {option?.address || ''}
      </Typography>
    );
  };

  return (
    <div className={`gd-map ${className}`} >
      {!readonly && (
        <Select
          showSearch
          value={nextValue?.address}
          fieldNames={{ value: 'address' }}
          placeholder="请输入地址"
          style={{ width: 440, marginBottom: 10 }}
          defaultActiveFirstOption={false}
          filterOption={false}
          onSearch={debounce(handleSearch, 300)}
          onChange={handleChange}
          notFoundContent={null}
          suffixIcon={<SearchOutlined />}
          options={data}
          getPopupContainer={props => props}
          tooltip={tooltip}
        />
      )}
      <div style={{ width: '100%', height: '544px' }}>
        <Map
          plugins={['ToolBar']}
          amapkey={amapkey}
          zoom={18}
          center={nextValue?.location}
        >
          {nextValue?.location && <Marker position={nextValue.location} />}
        </Map>
      </div>
    </div>
  );
};

export default Index;
