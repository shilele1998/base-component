import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as echarts from 'echarts';
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { ChinaMapProps, ZoomType, ZoomIconRender, InstanceParam } from './type';
import json from './china.json';
import './index.less'
import {
  defaultZoomProps,
  defaultMapOptions,
  nationwideName,
  mapSeries,
  calculateSize,
  getAreaColor,
  getColor
} from './const';

const ChinaMap: React.FC<ChinaMapProps> = (props) => {
  const {
    initialZoom = 1,
    isRoam = true,
    mapClassName = '',
    zoomControlClassName = '',
    zoomProps = defaultZoomProps,
    alwaysShowLabel = false,
    isHighlightProvince = true,
    canSelectProvince = true,
    tooltip = {},
    seriesProps = [],
    mapOptions = defaultMapOptions,
    zoomInRender,
    zoomOutRender,
    onClickProvince,
    onZoom,
    onClickMap,
    onRef
  } = props;

  const minZoom = zoomProps?.minZoom || defaultZoomProps?.minZoom;
  const showControl = zoomProps?.showControl || defaultZoomProps?.showControl;
  const maxZoom = zoomProps?.maxZoom || defaultZoomProps?.maxZoom;
  const scaleValue = zoomProps?.scaleValue || defaultZoomProps?.scaleValue;

  const normalStyleProps = Object.assign(
    {},
    defaultMapOptions?.normalStyleProps,
    mapOptions?.normalStyleProps ?? {}
  );

  const emphasisStyleProps = Object.assign(
    {},
    defaultMapOptions?.emphasisStyleProps,
    mapOptions?.emphasisStyleProps ?? {}
  );

  const labelProps = Object.assign(
    {},
    defaultMapOptions?.labelProps,
    mapOptions?.labelProps ?? {}
  );

  const [selectedName, setSelectedName] = useState<string>(nationwideName);
  const [zoom, setZoom] = useState<number>(initialZoom);
  const [center, setCenter] = useState<Array<number> | null>(null);
  const [instance, setInstance] = useState<echarts.ECharts>();

  const domRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (domRef.current)
      setInstance(echarts.init(domRef.current as HTMLElement));
    // tslint:disable-next-line
    echarts.registerMap(nationwideName, json);
    // 注册各省的地图
    json.features.map((item) => {
      echarts.registerMap(item?.properties?.name, {
        type: 'FeatureCollection',
        features: [item]
      });
    });

    const resizeCharts = () => {
      if (instance) instance?.resize();
    };

    window.addEventListener('resize', resizeCharts, false);

    return () => {
      if (instance) instance.dispose();
      if (timeRef?.current) clearTimeout(timeRef.current);
      window.removeEventListener('resize', resizeCharts);
    };
  }, []);

  const options = useMemo(() => {
    return {
      tooltip,
      // 地图配置
      geo: {
        ...mapOptions,
        show: true,
        map: selectedName,
        label: {
          ...labelProps,
          show: alwaysShowLabel || !!(selectedName === nationwideName),
          color: labelProps?.color ?? 'rgba(255, 255, 255, 0.6)',
          fontSize: calculateSize(
            (labelProps?.fontSize as number) ?? 10,
            zoom,
            2,
            minZoom
          )
        },
        roam: isRoam,
        regions: mapOptions?.regionsProps ?? [],
        itemStyle: {
          ...normalStyleProps,
          areaColor: getAreaColor(normalStyleProps?.areaColor, selectedName),
          borderColor: getAreaColor(normalStyleProps?.borderColor, selectedName)
        },
        emphasis: {
          ...emphasisStyleProps,
          itemStyle: {
            ...emphasisStyleProps?.itemStyle,
            areaColor:
              emphasisStyleProps?.itemStyle?.areaColor &&
              getColor(emphasisStyleProps.itemStyle.areaColor)
          },
          label: {
            ...emphasisStyleProps?.label,
            show: alwaysShowLabel || !!(selectedName === nationwideName)
          }
        },
        zoom: zoom,
        center: center,
        scaleLimit: {
          min: minZoom,
          max: maxZoom
        }
      },
      series: (seriesProps || []).concat(mapSeries)
    };
  }, [
    selectedName,
    zoom,
    center,
    isRoam,
    alwaysShowLabel,
    mapOptions,
    tooltip,
    seriesProps,
    zoomProps
  ]);

  useEffect(() => {
    if (instance) {
      instance.clear();
      instance.setOption(options, true);
    }
  }, [instance, options]);

  useEffect(() => {
    if (instance) {
      // 地图缩放事件
      instance.on('georoam', (params: InstanceParam) => {
        const currentOptions = instance.getOption();
        const geoOption = currentOptions.geo as Array<{
          zoom: number;
          center: Array<number>;
        }>;
        if (params.zoom && geoOption?.length && geoOption[0]) {
          const currentZoom = geoOption[0]?.zoom ?? initialZoom;
          const currentZoomType = params?.zoom === 1.1 ? 'zoomIn' : 'zoomOut';
          setZoom(currentZoom);
          if (onZoom) onZoom(currentZoomType, currentZoom);
        }
        // 地图移动改变中心点（防抖）
        if ((params.dy || params.dx) && geoOption?.length && geoOption[0]) {
          if (timeRef.current) clearTimeout(timeRef.current);
          timeRef.current = setTimeout(() => {
            setCenter(geoOption[0]?.center ?? null);
          }, 100);
        }
      });
      // hover省份对应点的时候，省份高亮
      instance.on('mouseover', (params: InstanceParam) => {
        if (
          isHighlightProvince &&
          params?.componentSubType !== 'map' &&
          selectedName === nationwideName
        ) {
          const selectedItem = params?.data?.areaName;
          if (selectedItem) {
            instance.dispatchAction({
              type: 'highlight',
              seriesName: 'map',
              name: selectedItem.replace(
                /[省, 市, 壮族自治区, 回族自治区, 维吾尔自治区, 自治区]/g,
                ''
              )
            });
          }
        }
      });

      instance.on('mouseout', (params: InstanceParam) => {
        if (
          isHighlightProvince &&
          params?.componentSubType !== 'map' &&
          selectedName === nationwideName
        ) {
          instance.dispatchAction({
            type: 'downplay'
          });
        }
      });

      instance.on('click', (params: InstanceParam) => {
        // 切换选择的地区
        if (params?.componentSubType === 'map') {
          if (params?.name) {
            const clickName =
              selectedName === nationwideName ? params.name : nationwideName;
            if (clickName === '南海诸岛') return;
            // 是否可以选择省份
            if (canSelectProvince) setSelectedName(clickName);
            if (onClickProvince) onClickProvince(clickName);
            setZoom(initialZoom);
            setCenter(null);
            if (onZoom) onZoom('zoomOut', 1);
          }
        }
        if (onClickMap) onClickMap(params);
      });
    }

    if (onRef) onRef(instance);

    return () => {
      if (instance) {
        instance.off('georoam');
        instance.off('mouseover');
        instance.off('mouseout');
        instance.off('click');
      }
      if (timeRef.current) clearTimeout(timeRef.current);
    };
  }, [
    instance,
    selectedName,
    isHighlightProvince,
    onRef,
    onClickMap,
    onClickProvince
  ]);

  const handleZoom = (type: ZoomType) => {
    if (type === 'zoomOut' && zoom < minZoom) return;
    const currentZoom =
      type === 'zoomIn' ? zoom + scaleValue : zoom - scaleValue;
    setZoom(currentZoom);
    if (onZoom) onZoom(type, currentZoom);
  };

  const renderZoomIcon = (type: ZoomType, customRender?: ZoomIconRender) => {
    const props = {
      className: 'control-icon',
      onClick: () => handleZoom(type)
    };
    if (customRender) return customRender(props);
    return type === 'zoomIn' ? (
      <ZoomInOutlined {...props} />
    ) : (
      <ZoomOutOutlined {...props} />
    );
  };

  return (
    <div className={`base-china-map ${mapClassName}`}>
      <div ref={domRef} className="map" />
      {isRoam && showControl && (
        <div className={`map-control ${zoomControlClassName}`}>
          {renderZoomIcon('zoomIn', zoomInRender)}
          {renderZoomIcon('zoomOut', zoomOutRender)}
        </div>
      )}
    </div>
  );
};

export default ChinaMap;
