import { ReactElement } from 'react';
import * as echarts from 'echarts';

export type ZoomType = 'zoomIn' | 'zoomOut';

type ZoomProps = {
  showControl?: boolean;
  minZoom?: number;
  maxZoom?: number;
  scaleValue?: number;
};

type ZoomIconProps = {
  className: string;
  onClick: (type: ZoomType) => void;
};

export type ColorItem = {
  offset: number;
  color: string;
};

export type Color = string | Array<ColorItem>;

export type CustomColor = {
  nationwideColor?: Color;
  color?: Color;
};

export type NormalStyleProps = Partial<
  Omit<echarts.GeoComponentOption['itemStyle'], 'areaColor' | 'borderColor'>
> & {
  areaColor: CustomColor;
  borderColor: CustomColor;
  shadowColor: string;
  shadowBlur: number;
};

type ItemStyle = Partial<
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Omit<echarts.GeoComponentOption['emphasis']['itemStyle'], 'areaColor'> & {
    areaColor: string | Array<ColorItem>;
  }
>;

export type EmphasisStyleProps = Partial<
  Omit<echarts.GeoComponentOption['emphasis'], 'itemStyle'> & {
    itemStyle: ItemStyle;
    label: Record<string, unknown>;
  }
>;

export type MapOptions = Partial<
  Omit<
    echarts.GeoComponentOption,
    'label' | 'itemStyle' | 'emphasis' | 'regions' | 'map'
  > & {
    shadowColor?: string;
    labelProps?: echarts.GeoComponentOption['label'];
    normalStyleProps?: NormalStyleProps;
    emphasisStyleProps?: EmphasisStyleProps;
    regionsProps?: echarts.GeoComponentOption['regions'];
  }
>;

export type ZoomIconRender = (props: ZoomIconProps) => ReactElement;

export interface ChinaMapProps {
  initialZoom?: number;
  isRoam?: boolean;
  mapClassName?: string;
  zoomControlClassName?: string;
  zoomProps?: ZoomProps;
  canSelectProvince?: boolean;
  alwaysShowLabel?: boolean;
  isHighlightProvince?: boolean;
  seriesProps?: Array<Record<string, unknown>>;
  tooltip?: Record<string, unknown>;
  mapOptions?: MapOptions;
  onClickProvince?: (selectedProvince: string) => void;
  zoomInRender?: ZoomIconRender;
  zoomOutRender?: ZoomIconRender;
  onZoom?: (type: ZoomType, zoomValue: number) => void;
  onClickMap?: (params: InstanceParam) => void;
  onRef?: (instance: echarts.ECharts | undefined) => void;
}

export interface InstanceParam {
  zoom: number;
  dy: number;
  dx: number;
  name: string;
  componentSubType: string;
  data: {
    areaName: string;
  };
}
