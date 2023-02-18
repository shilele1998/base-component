## Icon
- 项目中会出现很多svg的图标，如果需要自定义图标在`antd` 的`Icon` 组件中使用，令`useType='comp'`, 并将`component` 赋值为本地存储`svg`的路径，如果直接引用网络地址`useType='url'`, `svgUrl` 为`svg`的网络地址;
## 代码示例

```tsx
import React from 'react';
import Icon  from './demos';

export default () => <Icon />;

```
<API id='Icon' ></API>