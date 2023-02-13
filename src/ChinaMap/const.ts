import { CustomColor, MapOptions } from './type';

type ColorItem = {
  offset: number;
  color: string;
};

export const nationwideName = 'china';

export const mapSeries = [
  {
    name: 'map',
    type: 'map',
    geoIndex: 0,
    roam: true,
    tooltip: {
      show: false
    }
  }
];

export const defaultZoomProps = {
  showControl: true,
  minZoom: 1,
  maxZoom: 10,
  scaleValue: 0.1
};

export const defaultMapOptions: MapOptions = {
  labelProps: {},
  normalStyleProps: {
    areaColor: {
      nationwideColor: '#061C68',
      color: [
        { offset: 0, color: '#16CEB9' },
        { offset: 1, color: '#6648FF' }
      ]
    },
    borderColor: { nationwideColor: '#24C1F7', color: '#25C1F8' },
    shadowColor: '#24C1F7',
    shadowBlur: 2
  },
  emphasisStyleProps: {
    label: { color: '#FFFFFF' },
    itemStyle: {
      areaColor: [
        { offset: 0, color: '#16CEB9' },
        { offset: 1, color: '#6648FF' }
      ],
      shadowColor: '#24C1F7'
    }
  },
  regionsProps: []
};

// 根据缩放值计算字体大小
export const calculateSize = (
  minSize: number,
  zoomValue: number,
  addValue: number,
  minZoom: number
): number => {
  if (!zoomValue) return minSize;
  const finalSize = minSize + Math.floor(zoomValue - minZoom) * addValue;
  return finalSize;
};

// 判断颜色是否全国和省份显示不一样
export const getAreaColor = (areaColor: CustomColor, selectName: string) => {
  if (!areaColor) return;
  const { nationwideColor, color } = areaColor;
  if (!nationwideColor && !color) return areaColor;
  if (nationwideColor && color) {
    return selectName === nationwideName
      ? getColor(nationwideColor)
      : getColor(color);
  }
  if (color) return getColor(color);
};

// 设置颜色为单一色或渐变色
export const getColor = (
  color: string | Array<ColorItem>,
  isInverse?: boolean
) => {
  if (typeof color === 'string') return color;
  if (Array.isArray(color)) {
    return {
      type: 'linear',
      x: isInverse ? 1 : 0,
      y: 0,
      x2: 0,
      y2: isInverse ? 0 : 1,
      colorStops: color,
      global: false
    };
  }
  return null;
};
