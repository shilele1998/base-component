/**
 * title: 基础用法
 * desc: 通过onClickProvince属性传递的方法，可获取到当前点击的地区，筛选对应的数据。通过传递zoomInRender函数，自定义缩放面板中的放大组件。
 */
import React, { useMemo, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import ChinaMap from '../../index';
import styles from  './index.less';

type StoreItem = {
  areaName: string;
  value: [number, number];
};

const data: Array<StoreItem> = [
  { areaName: '甘肃', value: [104.35851932200904, 37.4012315945624] },
  { areaName: '甘肃', value: [101.39963016170259, 33.6450784370202] },
  { areaName: '四川', value: [104.3765027196248, 28.282304998976485] },
  { areaName: '四川', value: [105.29696333219198, 27.721744899807277] }
];

const BaseMap = () => {
  const [storeData, setStoreData] = useState<Array<StoreItem>>(data);
  const [currentName, setCurrentName] = useState<string>('全国');
  const [zoomValue, setZoomValue] = useState<number>(1);

  const zoomInRender = (props: Record<string, unknown>) => {
    return <PlusOutlined {...props} />;
  };

  const onZoom = (type: string, value: number) => {
    setZoomValue(value);
  };

  const onClickProvince = (selectedName: string) => {
    const currentStoreData =
      data.filter((item) => item.areaName === selectedName) || [];
    setStoreData(selectedName === '全国' ? data : currentStoreData);
    setCurrentName(selectedName);
  };

  const calculateSize = (
    minSize: number,
    zoomValue: number,
    addValue: number
  ): number => {
    if (!zoomValue) return minSize;
    const finalSize = minSize + Math.floor(zoomValue - 1) * addValue;
    return finalSize;
  };

  const series = useMemo(() => {
    return [
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: storeData,
        symbolSize:
          currentName === '全国'
            ? calculateSize(10, zoomValue, 6)
            : calculateSize(40, zoomValue, 6),
        symbolKeepAspect: true,
        itemStyle: {
          color: "#5DBD32",
          shadowBlur: 10,
        }
      }
    ];
  }, [storeData, zoomValue, currentName]);

  const mapOptions = useMemo(
    () => ({
      select: {
        itemStyle: {
          areaColor: '#3dc3f6'
        }
      },
      normalStyleProps: {
        areaColor: {
          type: "radial",
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
            },
          ],
          globalCoord: true,
        },
        borderColor: "rgba(147, 235, 248, 1)",
        shadowColor: "rgba(128, 217, 248, 1)",
        shadowOffsetX: -2,
        shadowOffsetY: 2,
        shadowBlur: 10,
      },
      emphasisStyleProps: {
        label: { color: '#fff', show: true },
        itemStyle: {
          areaColor: [
            { offset: 0, color: '#3dc3f6' },
            { offset: 1, color: '#3dc3f6' }
          ],
          shadowColor: '#24C1F7'
        }
      }
    }),
    []
  );

  return (
    <ChinaMap
      mapClassName={styles.container}
      onClickProvince={onClickProvince}
      zoomInRender={zoomInRender}
      seriesProps={series}
      onZoom={onZoom}
      mapOptions={mapOptions}
    />
  );
};

export default BaseMap;
