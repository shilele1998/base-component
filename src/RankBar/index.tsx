import React, {
  FC,
  useEffect,
  useRef
} from 'react';
import * as echarts from 'echarts';
import { Props } from './type';
import { myColor } from './const'

const defaultStyle = {};
const Index: FC<Props> = props => {
  const { style = {}, yAxis, data, } = props;
  const ref = useRef<HTMLDivElement>(null);
  const options: echarts.EChartsOption = {
    grid: {
      left: 0,
      right: '12%',
      top: 0,
      bottom: 0,
      containLabel: true
    },
    xAxis: {
      show: false,
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: [
      {
        axisTick: "none",
        data: yAxis,
        axisLabel: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          textStyle: {
            color: "#fff",
            fontSize: "16",
          },
        }
      },
      {
        axisTick: "none",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        axisLine: "none",
        axisLabel: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          textStyle: {
            color: "#fff",
            fontSize: "16"
          },
        },
        data: (yAxis || []).map((item, index) => index + 1).reverse(),
      }
    ],
    series: [
      {
        type: 'bar',
        itemStyle: {
          color: (params) => {
            const num = myColor.length;
            return myColor[params.dataIndex % num];
          }
        },
        data,
        barWidth: 12,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
          fontSize: 12,
          color: '#fff',
          overflow: 'truncate',
          fontWeight: 500,
          fontFamily: 'PingFang SC, PingFang SC-Medium'
        },
        z: 2
      },
      {
        name: "白框",
        type: "bar",
        yAxisIndex: 1,
        barGap: "-100%",
        data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
        barWidth: 20,
        itemStyle: {
          color: "#0e2147",
          borderRadius: 5
        },
        z: 1,
      }
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };
  useEffect(() => {
    const myCharts = echarts.init(ref.current!);
    myCharts.setOption(options);
  }, [yAxis, data]);

  return (
    <div
      className="base-rank-bar "
      style={{ ...defaultStyle, ...style }}
      ref={ref}
    />
  );
};


export default Index;
