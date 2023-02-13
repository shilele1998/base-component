/**
 * title: 自定义颜色
 * desc: 通过传入emphasisStyleProps, normalStyleProps可对区域颜色及高亮颜色进行更改。
 */
import React from 'react';
import * as echarts from 'echarts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ChinaMap } from '@tuya-fe/ka-datav-base';
import styles from './index.less';

const BaseMap = () => {
  const onRef = (instance: echarts.ECharts) => {
    if (instance) {
      instance.on('click', (params: Record<string, unknown>) => {
        console.info('params:', params);
      });
    }
  };

  return (
    <ChinaMap
      mapClassName={styles.container}
      onRef={onRef}
      mapOptions={{
        normalStyleProps: {
          areaColor: {
            nationwideColor: [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ],
            color: [
              { offset: 0, color: '#F76F03' },
              { offset: 1, color: '#FFCF45' }
            ]
          },
          borderColor: {
            color: [
              { offset: 0, color: '#00EA99' },
              { offset: 1, color: '#00D8B0' }
            ]
          },
          shadowColor: '#24C1F7',
          shadowBlur: 2
        },
        emphasisStyleProps: {
          label: { color: '#FFFFFF' },
          itemStyle: {
            areaColor: [
              { offset: 0, color: '#00EA99' },
              { offset: 1, color: '#00D8B0' }
            ]
          }
        }
      }}
    />
  );
};

export default BaseMap;
