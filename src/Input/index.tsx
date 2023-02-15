import React, { FC, useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
import { Input, InputProps } from 'antd';
import {
  SearchProps,
  TextAreaProps,
  PasswordProps,
  GroupProps,
} from 'antd/lib/input';

interface Props extends InputProps {
  trim?: boolean;
}

interface InputSearchProps extends SearchProps {
  trim?: boolean;
}

interface InputTextArea extends TextAreaProps {
  trim?: boolean;
}

const Index: FC<Props> & {
  Search: FC<InputSearchProps>;
  TextArea: FC<InputTextArea>;
  Password: FC<PasswordProps>;
  Group: FC<GroupProps>;
} = props => {
  const { input: locale } = useContext(ConfigContext);
  const {
    className = '',
    trim = false,
    placeholder = locale.pleaseInput,
    value,
    onChange,
    ...restProps
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (trim) {
      event.target.value = event.target.value.trim();
      onChange?.(event);
    }
    onChange?.(event);
  };

  return (
    <Input
      className={`input ${className}`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

Index.Search = props => {
  const { input: locale } = useContext(ConfigContext);
  const {
    className = '',
    trim = false,
    placeholder = locale.pleaseInput,
    value,
    onChange,
    ...restProps
  } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (trim) {
      event.target.value = event.target.value.trim();
      onChange?.(event);
    }
    onChange?.(event);
  };
  return (
    <Input.Search
      className={`input-search ${className}`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

Index.TextArea = props => {
  const { input: locale } = useContext(ConfigContext);
  const {
    className = '',
    trim = false,
    placeholder = locale.pleaseInput,
    value,
    onChange,
    ...restProps
  } = props;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (trim) {
      event.target.value = event.target.value.trim();
      onChange?.(event);
    }
    onChange?.(event);
  };
  return (
    <Input.TextArea
      className={`input-textarea ${className}`}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

Index.Password = props => {
  const { input: locale } = useContext(ConfigContext);
  const {
    className = '',
    placeholder = locale.pleaseInput,
    ...restProps
  } = props;
  return (
    <Input.Password
      className={`input-password ${className}`}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

Index.Group = Input.Group;

export default Index;
