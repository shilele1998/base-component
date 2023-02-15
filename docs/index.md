---
title: 介绍
---

## [<img src="https://s1.imagehub.cc/images/2023/02/13/6bf6bc7bbaba8043d971f9ab22bd7482.png">](https://github.com/shilele1998/base-component.git)

## 依赖 UI 库

- <font color=#389e0d>基础组件： [ant-design](https://ant.design/components/overview-cn/) v4.22.x</font></br>
- <font color=#389e0d>图表：[echarts](https://echarts.apache.org/examples/zh/index.html) v5.3.x</font>
- <font color=#389e0d>高度地图：[react-amap](https://github.com/ElemeFE/react-amap) v1.2.x</font>
- <font color=#389e0d>antd图片裁剪：[antd-img-crop](https://github.com/nanxiaobei/antd-img-crop) v4.2.x</font>
- <font color=#389e0d>cropper图片裁剪：[react-cropper](https://github.com/react-cropper/react-cropper) v2.1.x</font>

## 宗旨
Enhance Antd Design

## 目标
封装在后台管理系统中常见的标准组件，提高开发效率。

## 安装

```bash
yarn add base-component
```

## 使用

```bash
import { Table } from '@base-component';
```

## 按需加载

新增 babel 配置

```bash
["import", { "libraryName": "antd", "style": true }, "antd"],
[
  "import",
  {
    "libraryName": "base-component",
    "libraryDirectory": "lib",
    "style": true,
    "camel2DashComponentName": false
  }
]
```
