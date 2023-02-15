import React, { FC, useContext, useState, useMemo, ReactNode } from 'react';
import { ConfigContext } from '../ConfigProvider';
import { Select, SelectProps, Typography } from 'antd';
import { FilterFunc, BaseOptionType } from 'rc-select/lib/Select';
import { OptionGroupFC } from 'rc-select/lib/OptGroup';
import { OptionFC } from 'rc-select/lib/Option';
import { DefaultOptionType } from 'antd/lib/select';

interface Props extends SelectProps {
  highlightSearch?: boolean;
  searchWithLabel?: boolean;
  tooltip?: boolean | ((option: DefaultOptionType) => ReactNode) | ReactNode;
  tooltipClassName?: string;
}

type Func = FC<Props> & {
  OptGroup: OptionGroupFC;
  Option: OptionFC;
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
};

function highlightText(text, key) {
  if (key && text && typeof text === 'string' && typeof key === 'string') {
    const newTextArr = text.split('').map(t => {
      return key.toLowerCase().indexOf(t.toLowerCase()) > -1 ? (
        <span className="select-highlight" key={t}>
          {t}
        </span>
      ) : (
        t
      );
    });
    return newTextArr;
  } else {
    return text;
  }
}

const Index: Func = props => {
  const { select: locale } = useContext(ConfigContext);
  const {
    className = '',
    highlightSearch = false,
    tooltip = false,
    tooltipClassName = '',
    optionLabelProp,
    fieldNames = { label: 'label', value: 'value', options: 'options' },
    searchWithLabel = false,
    showSearch,
    options: propsOptions,
    placeholder = locale.pleaseSelect,
    children,
    filterOption,
    onSearch,
    onDropdownVisibleChange,
    ...restProps
  } = props;
  const [searchText, setSearchText] = useState<string>();

  const options = useMemo(() => {
    return propsOptions?.map(option => {
      const highlightLabel = highlightText(
        option[fieldNames.label || 'label'],
        searchText,
      );
      return {
        ...option,
        // 转换高亮 label
        highlightLabel: tooltip ? (
          <Typography.Text
            className={`select-tooltip ${tooltipClassName}`}
            ellipsis={{
              tooltip:
                typeof tooltip === 'function' ? tooltip(option) : tooltip,
            }}
          >
            {highlightLabel}
          </Typography.Text>
        ) : highlightSearch ? (
          highlightLabel
        ) : (
          undefined
        ),
        // 转换tooltip label
        tooltipLabel: tooltip ? (
          <Typography.Text
            className={`select-tooltip ${tooltipClassName}`}
            ellipsis={{
              tooltip:
                typeof tooltip === 'function' ? tooltip(option) : tooltip,
            }}
          >
            {option[fieldNames.label || 'label']}
          </Typography.Text>
        ) : (
          undefined
        ),
      };
    });
  }, [propsOptions, highlightSearch, searchText, tooltip]);

  const handleSearch = (value: string) => {
    if (highlightSearch) {
      setSearchText(value);
    }
    onSearch?.(value);
  };

  const nextFieldNames = useMemo(() => {
    return {
      ...fieldNames,
      label: highlightSearch
        ? 'highlightLabel'
        : tooltip
        ? 'tooltipLabel'
        : fieldNames.label || 'label',
    };
  }, [fieldNames, highlightSearch, tooltip, searchText]);
  const hanldeDropdownVisibleChange = (open: boolean) => {
    if (highlightSearch && !open) {
      setSearchText(undefined); // 关闭时清空搜索关键字
    }
    onDropdownVisibleChange?.(open);
  };

  const handleFilterOption: FilterFunc<BaseOptionType> = (input, option) => {
    return option?.[fieldNames.label || 'label']?.includes(input);
  };

  return (
    <Select
      className={`select ${className}`}
      options={options}
      fieldNames={children ? undefined : nextFieldNames}
      optionLabelProp={
        optionLabelProp || (tooltip ? 'tooltipLabel' : undefined)
      }
      placeholder={placeholder}
      onDropdownVisibleChange={hanldeDropdownVisibleChange}
      filterOption={
        filterOption !== null && filterOption !== undefined
          ? filterOption
          : searchWithLabel
          ? handleFilterOption
          : undefined
      }
      showSearch={showSearch}
      onSearch={showSearch ? handleSearch : undefined}
      {...restProps}
    >
      {children}
    </Select>
  );
};

Index.SECRET_COMBOBOX_MODE_DO_NOT_USE = Select.SECRET_COMBOBOX_MODE_DO_NOT_USE;

Index.Option = Select.Option;

Index.OptGroup = Select.OptGroup;

export default Index;
