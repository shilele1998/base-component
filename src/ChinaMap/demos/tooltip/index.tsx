/**
 * title: 自定义散点图及tooltip
 * desc: 通过tooltip设置散点图的tooltip，通过onClickMap获取地图实例的点击事件。
 */
import React, { useMemo, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ChinaMap } from '@tuya-fe/ka-datav-base';
import storeIcon from './store.png';
import styles from './index.less';

type StoreItem = {
  areaName: string;
  value: [number, number];
  accountName: string;
  areaId: string;
};

const data: Array<StoreItem> = [
  {
    areaName: '甘肃',
    value: [104.35851932200904, 37.4012315945624],
    accountName: '测试1',
    areaId: '1111'
  },
  {
    areaName: '甘肃',
    value: [101.39963016170259, 33.6450784370202],
    accountName: '测试2',
    areaId: '2222'
  },
  {
    areaName: '四川',
    value: [104.3765027196248, 28.282304998976485],
    accountName: '测试3',
    areaId: '3333'
  },
  {
    areaName: '四川',
    value: [105.29696333219198, 27.721744899807277],
    accountName: '测试4',
    areaId: '4444'
  }
];

const BaseMap = () => {
  const [storeData, setStoreData] = useState<Array<StoreItem>>(data);
  const [currentName, setCurrentName] = useState<string>('全国');
  const [zoomValue, setZoomValue] = useState<number>(1);

  const onClickMap = (params: {
    componentSubType: string;
    data: Record<string, unknown>;
  }) => {
    if (params.componentSubType === 'scatter') {
      const btn = document.getElementById('showDevice');
      btn?.addEventListener('click', () =>
        console.info('params:', params?.data)
      );
    }
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

  const tooltip = {
    show: true,
    hideDelay: 0,
    triggerOn: 'click',
    backgroundColor: 'transparent',
    padding: 0,
    enterable: true,
    borderWidth: 0,
    formatter: (params: {
      data: { areaName: string; accountName: string; areaId: string };
    }) => {
      return `<div class=${styles.tip}>
        <div class=${styles.tipContent}>
          <p class=${styles.areaName}>${params?.data?.areaName ?? '--'}</p>
          <p class=${styles.account}>区域管理员：${
        params?.data?.accountName ?? '--'
      }</p>
          <p id="showDevice" data-areaId=${params?.data?.areaId} class=${
        styles.btn
      }>查看该区域所有设备</p>
        </div>
      </div>`;
    }
  };

  const series = useMemo(() => {
    return [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: storeData,
        symbolSize:
          currentName === '全国'
            ? calculateSize(20, zoomValue, 6)
            : calculateSize(40, zoomValue, 6),
        symbol: `image://${storeIcon}`,
        symbolKeepAspect: true
      }
    ];
  }, [storeData, zoomValue, currentName]);

  return (
    <ChinaMap
      tooltip={tooltip}
      mapClassName={styles.container}
      onClickProvince={onClickProvince}
      seriesProps={series}
      onZoom={onZoom}
      onClickMap={onClickMap}
    />
  );
};

export default BaseMap;
