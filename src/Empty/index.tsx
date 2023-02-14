import React, { FC } from 'react';
import { Empty, Typography } from 'antd';
import { EmptyProps } from 'antd/lib/empty';
import {
  defaultEmptyImg,
  noSearchData,
  colorfulNoSearchData,
  noHouse,
  colorfulNoHouse,
  noProject,
  colorfulNoProject,
  expect,
  colorfulExpect,
  noLocation,
  colorfulNoLocation,
  noMessage,
  colorfulNoMessage,
  noDevice,
  colorfulNoDevice,
  noPermission,
  colorfulNoPermission,
  noService,
  colorfulNoService,
  noNetwork,
  colorfulNoNetwork,
  noSource,
  colorfulNoSource,
  noList,
  colorfulNoList,
  smallType,
} from './empty-image';

interface Props extends EmptyProps {
  title: string;
}

const Index: FC<Props> & EmptyType = props => {
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
      className={`ka-component-empty ${className}`}
      image={image || defaultEmptyImg}
      description={null}
      {...restProps}
    >
      {title && (
        <Typography.Text className="ka-component-empty-title">
          {title}
        </Typography.Text>
      )}
      {description && (
        <Typography.Text
          type="secondary"
          className="ka-component-empty-description"
        >
          {description}
        </Typography.Text>
      )}
      {children && (
        <div className="ka-component-empty-children">{children}</div>
      )}
    </Empty>
  );
};

interface EmptyType extends React.FC<EmptyProps> {
  IMAGE_DEFAULT: React.ReactNode;
  IMAGE_DEFAULT_COLORFUL: React.ReactNode;
  IMAGE_SEARCH_DATA: React.ReactNode;
  IMAGE_SEARCH_DATA_COLORFUL: React.ReactNode;
  IMAGE_HOUSE: React.ReactNode;
  IMAGE_HOUSE_COLORFUL: React.ReactNode;
  IMAGE_PROJECT: React.ReactNode;
  IMAGE_PROJECT_COLORFUL: React.ReactNode;
  IMAGE_EXPECT: React.ReactNode;
  IMAGE_EXPECT_COLORFUL: React.ReactNode;
  IMAGE_LOCATION: React.ReactNode;
  IMAGE_LOCATION_COLORFUL: React.ReactNode;
  IMAGE_MESSAGE: React.ReactNode;
  IMAGE_MESSAGE_COLORFUL: React.ReactNode;
  IMAGE_DEVICE: React.ReactNode;
  IMAGE_DEVICE_COLORFUL: React.ReactNode;
  IMAGE_PERMISSION: React.ReactNode;
  IMAGE_PERMISSION_COLORFUL: React.ReactNode;
  IMAGE_SERVICE: React.ReactNode;
  IMAGE_SERVICE_COLORFUL: React.ReactNode;
  IMAGE_NETWORK: React.ReactNode;
  IMAGE_NETWORK_COLORFUL: React.ReactNode;
  IMAGE_404: React.ReactNode;
  IMAGE_404_COLORFUL: React.ReactNode;
  IMAGE_LIST: React.ReactNode;
  SMALL: React.ReactNode;
}

Index.IMAGE_DEFAULT = noList;
Index.IMAGE_DEFAULT_COLORFUL = colorfulNoList;
Index.IMAGE_SEARCH_DATA = noSearchData;
Index.IMAGE_SEARCH_DATA_COLORFUL = colorfulNoSearchData;
Index.IMAGE_HOUSE = noHouse;
Index.IMAGE_HOUSE_COLORFUL = colorfulNoHouse;
Index.IMAGE_PROJECT = noProject;
Index.IMAGE_PROJECT_COLORFUL = colorfulNoProject;
Index.IMAGE_EXPECT = expect;
Index.IMAGE_EXPECT_COLORFUL = colorfulExpect;
Index.IMAGE_LOCATION = noLocation;
Index.IMAGE_LOCATION_COLORFUL = colorfulNoLocation;
Index.IMAGE_MESSAGE = noMessage;
Index.IMAGE_MESSAGE_COLORFUL = colorfulNoMessage;
Index.IMAGE_DEVICE = noDevice;
Index.IMAGE_DEVICE_COLORFUL = colorfulNoDevice;
Index.IMAGE_PERMISSION = noPermission;
Index.IMAGE_PERMISSION_COLORFUL = colorfulNoPermission;
Index.IMAGE_SERVICE = noService;
Index.IMAGE_SERVICE_COLORFUL = colorfulNoService;
Index.IMAGE_NETWORK = noNetwork;
Index.IMAGE_NETWORK_COLORFUL = colorfulNoNetwork;
Index.IMAGE_404 = noSource;
Index.IMAGE_404_COLORFUL = colorfulNoSource;
Index.IMAGE_LIST = noList;
Index.SMALL = smallType;

export default Index;
