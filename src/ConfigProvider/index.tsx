import React, { FC, createContext } from 'react';
import { ConfigProvider } from 'antd';
import zh from './locales/zh';
import Empty from '../Empty';
import { ConfigProviderProps } from 'antd/lib/config-provider';
import { SmileOutlined } from '@ant-design/icons';

export const ConfigContext = createContext({} as typeof zh);

interface Props extends ConfigProviderProps {
  kaLocale?: typeof zh;
}

const Index: FC<Props> = props => {
  const { kaLocale = zh, children, ...restProps } = props;

  const renderEmpty = (componentName?: string) => {
    switch (componentName) {
      case 'Table':
      case 'List':
        return (
          <Empty
            image={Empty.IMAGE_DEFAULT}
            description={kaLocale.configProvider.noData}
          />
        );
      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
        return (
          <Empty
            image={Empty.SMALL}
            description={kaLocale.configProvider.noData}
            imageStyle={{ height: 48 }}
          />
        );
      case 'Transfer':
      case 'Mentions':
        return (
          <div>
            <SmileOutlined style={{ fontSize: 20 }} />
            <p>{kaLocale.configProvider.dataNoFound}</p>
          </div>
        );
      default:
        return <Empty />;
    }
  };

  return (
    <ConfigProvider {...restProps} renderEmpty={renderEmpty}>
      <ConfigContext.Provider value={kaLocale}>
        {children}
      </ConfigContext.Provider>
    </ConfigProvider>
  );
};

export default Index;
