import React from 'react';

export interface Response<T> {
  result: T;
  success: boolean;
  t: number;
  msg?: string;
  errorMsg?: string;
  errorCode?: number;
  code: number;
}

export type ComponentConfigType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'enum'
  | 'color'
  | 'url'
  | 'array'
  | 'json'
  | 'object';

export interface ComponentConfig {
  text: string;
  type: ComponentConfigType;
  enum?: { text: string; value: string | number }[];
  properties?: Record<string, ComponentConfig>;
}

export declare type ForwardRefFunctionType<P, C> =
  React.ForwardRefExoticComponent<P & React.RefAttributes<HTMLDivElement>> & {
    config?: C;
    getInitialProps?: InitialProps;
    Skeleton?: React.FC;
    mockConfig?: C;
    getLayoutComponent?: (
      arg: string
    ) => ForwardRefFunctionType<any, C> | undefined;
  };

export type BaseFunctionType<P, C> = React.FC<P> & {
  config?: C;
  getInitialProps?: InitialProps;
  Skeleton?: React.FC;
  mockConfig?: C;
  getLayoutComponent?: (arg: string) => BaseFunctionType<any, C> | undefined;
};

export type InitialProps = () => Promise<Record<string, unknown>>;

export interface DataType {
  eventCode: string;
  mode: string;
  [prop: string]: string;
}
