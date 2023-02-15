import React, { FC, ReactNode } from 'react';
import { Space, Dropdown, Menu, Popconfirm, Typography } from 'antd';
import { PopconfirmProps } from 'antd/lib/popconfirm';
import { MoreOutlined } from '@ant-design/icons';

interface Item {
  label: ReactNode;
  key?: string;
  onClick?: () => void;
  disabled?: boolean;
  popconfirmProps?: PopconfirmProps;
}

interface Props {
  items: Item[];
  count?: number;
}

const Index: FC<Props> = props => {
  const { items, count = 4 } = props;

  const itemRender = (item: Item, index: number) => {
    return item.popconfirmProps ? (
      <Popconfirm {...item.popconfirmProps} key={item?.key || index}>
        <Typography.Link disabled={item.disabled}>{item.label}</Typography.Link>
      </Popconfirm>
    ) : (
      <Typography.Link
        disabled={item.disabled}
        onClick={item?.onClick}
        key={item?.key || index}
      >
        {item.label}
      </Typography.Link>
    );
  };

  return (
    <div className="table-operate">
      <Space size="middle">
        {items.length > count
          ? items.map((_, index) => {
              if (index < count - 1) {
                return itemRender(_, index);
              } else if (index === count - 1) {
                return (
                  <Dropdown
                    overlayClassName="table-operate-dropdown"
                    key={_.key || index}
                    overlay={
                      <Menu
                        items={items
                          .map((_, index) =>
                            index >= count - 1
                              ? {
                                  label: itemRender(_, index),
                                  key: _.key || index,
                                }
                              : null,
                          )!
                          .filter(_ => _)}
                      />
                    }
                    placement="bottom"
                  >
                    <a className="table-operate-more">
                      <MoreOutlined />
                    </a>
                  </Dropdown>
                );
              } else {
                return;
              }
            })
          : items.map((_, index) => itemRender(_, index))}
      </Space>
    </div>
  );
};

export default Index;
