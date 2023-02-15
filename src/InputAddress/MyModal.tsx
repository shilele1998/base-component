import { Map, Marker } from 'react-amap';
import React, { FC, useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { Typography } from 'antd';
import Modal from '../Modal';
import Select from '../Select';
import { DefaultOptionType } from 'rc-select/lib/Select';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

interface Value {
  address: string;
  location: Location;
  district?: string;
  name?: string;
  value?: string;
  label?: string;
}

interface Location {
  longitude: number;
  latitude: number;
}
interface Props {
  visible: boolean;
  onCancel: () => void;
  className?: string;
  amapkey: string;
  value?: Value;
  modalTitle?: string;
  onChange?: (value: Value) => void;
}

interface OptionsType extends Omit<DefaultOptionType, 'value'>, Value {
  label: string;
}

// 不要使用navigator.geolocation.getCurrentPosition获取当前坐标，各个浏览器获取的经纬度经纬度不同

const Index: FC<Props> = props => {
  const { value, visible, modalTitle, onCancel, onChange, amapkey } = props;
  const [data, setData] = useState<OptionsType[]>();
  const [nextValue, setNextValue] = useState<Value>();

  useEffect(() => {
    if (value && !data) {
      const getData = async () => {
        const response = (
          await axios.get('https://restapi.amap.com/v3/place/around', {
            params: {
              keywords: `${value.district || ''}${value.address || ''}`,
              location: `${value.location.longitude},${value.location.latitude}`,
              key: amapkey,
              children: 1,
              offset: 1,
              page: 1,
              extensions: 'all',
            },
          })
        ).data;
        if (response.status) {
          const result = response.pois.map(_ => ({
            label: (
              <Typography.Text>
                {_.name}
                <Typography.Text type="secondary">
                  {_.pname || ''}
                  {_.cityname || ''}
                  {_.adname || ''}
                  {_.address || ''}
                </Typography.Text>
              </Typography.Text>
            ),
            value: _.location,
            location: {
              longitude: _.location.split(',')[0],
              latitude: _.location.split(',')[1],
            },
            district: `${_.pname}${_.cityname}${_.adname}`,
            address: _.address,
          }));
          setData(result);
          setNextValue(result[0]);
        } else {
          setData([]);
        }
      };
      getData();
    }
  }, [value, data]);

  const handleCancel = () => {
    setData(undefined);
    onCancel?.();
  };

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
            _.location && typeof _.location === 'string'
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
                  value: _.location,
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
      const nextTip = (data || []).find(_ => _.value === newValue) as Value;
      setNextValue(nextTip);
    }
  };

  const handleOk = () => {
    if (nextValue) {
      onChange?.({
        name: nextValue?.name!,
        district: nextValue?.district!,
        location: nextValue?.location!,
        address: nextValue?.address!,
      });
      handleCancel();
    }
  };

  return (
    <Modal
      title={modalTitle || '地址'}
      width={896}
      visible={visible}
      onCancel={handleCancel}
      destroyOnClose
      onOk={handleOk}
      className="input-address-modal"
    >
      <Select
        showSearch
        value={nextValue?.value}
        placeholder="请输入地址"
        style={{ width: 440, marginBottom: 10 }}
        defaultActiveFirstOption={false}
        filterOption={false}
        onSearch={debounce(handleSearch, 300)}
        onChange={handleChange}
        notFoundContent={null}
        suffixIcon={<SearchOutlined />}
        options={data}
        tooltip={
          <Typography className="input-address-modal-tooltip">
            {nextValue?.name || ''}
            {nextValue?.district || ''}
            {nextValue?.address || ''}
          </Typography>
        }
      />
      <div style={{ width: '100%', height: '544px' }}>
        <Map
          plugins={['ToolBar']}
          amapkey={amapkey}
          zoom={16}
          center={nextValue?.location}
        >
          {nextValue?.location && <Marker position={nextValue.location} />}
        </Map>
      </div>
    </Modal>
  );
};

export default Index;
