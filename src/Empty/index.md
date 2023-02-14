---
title: Empty
group:
  title: 组件
  path: /base
---

# Empty

初始化 `image`

## 代码示例

### 基础使用
<code src="./demos/index.tsx">
<code src="./demos/base.tsx">

### 跟随主题色
<code src="./demos/colorfull.tsx">

### 全局空状态
<code src="./demos/global.tsx">


### 内置图片

```tsx
/**
 * desc: 内置图片
 * inline: true
 */
import React, { useState } from 'react';
import { List, Card, Typography, Switch, ConfigProvider } from 'antd';
import { Empty } from './index.tsx';
// import './demo/index.less';

const { Meta } = Card;
const { Paragraph } = Typography;

const Index = () => {
	const [colorful, setColorful] = useState(false);
	const colorfulData = [
		{
			title: 'Empty.IMAGE_404_COLORFUL',
			text: '404',
			content: Empty.IMAGE_404_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_SERVICE_COLORFUL',
			text: '500',
			content: Empty.IMAGE_SERVICE_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_NETWORK_COLORFUL',
			text: '无网络',
			content: Empty.IMAGE_NETWORK_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_EXPECT_COLORFUL',
			text: '事件异常',
			content: Empty.IMAGE_EXPECT_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_LOCATION_COLORFUL',
			text: '暂无位置信息',
			content: Empty.IMAGE_LOCATION_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_PERMISSION_COLORFUL',
			text: '暂无权限',
			content: Empty.IMAGE_PERMISSION_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_SEARCH_DATA_COLORFUL',
			text: '搜索无结果',
			content: Empty.IMAGE_SEARCH_DATA_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_PROJECT_COLORFUL',
			text: '暂无项目',
			content: Empty.IMAGE_PROJECT_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_MESSAGE_COLORFUL',
			text: '暂无消息',
			content: Empty.IMAGE_MESSAGE_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_DEVICE_COLORFUL',
			text: '暂无设备',
			content: Empty.IMAGE_DEVICE_COLORFUL,
		},

		{
			title: 'Empty.IMAGE_HOUSE_COLORFUL',
			text: '暂无房屋',
			content: Empty.IMAGE_HOUSE_COLORFUL,
		},
		{
			title: 'Empty.IMAGE_DEFAULT_COLORFUL',
			text: '暂无数据',
			content: Empty.IMAGE_DEFAULT_COLORFUL,
		},
	];
	const data = [
		{
			title: 'Empty.IMAGE_404',
			text: '404',
			content: Empty.IMAGE_404,
		},
		{
			title: 'Empty.IMAGE_SERVICE',
			text: '500',
			content: Empty.IMAGE_SERVICE,
		},
		{
			title: 'Empty.IMAGE_NETWORK',
			text: '无网络',
			content: Empty.IMAGE_NETWORK,
		},
		{
			title: 'Empty.IMAGE_EXPECT',
			text: '事件异常',
			content: Empty.IMAGE_EXPECT,
		},
		{
			title: 'Empty.IMAGE_LOCATION',
			text: '暂无位置信息',
			content: Empty.IMAGE_LOCATION,
		},
		{
			title: 'Empty.IMAGE_PERMISSION',
			text: '暂无权限',
			content: Empty.IMAGE_PERMISSION,
		},
		{
			title: 'Empty.IMAGE_SEARCH_DATA',
			text: '搜索无结果',
			content: Empty.IMAGE_SEARCH_DATA,
		},

		{
			title: 'Empty.IMAGE_PROJECT',
			text: '暂无项目',
			content: Empty.IMAGE_PROJECT,
		},
		{
			title: 'Empty.IMAGE_MESSAGE',
			text: '暂无消息',
			content: Empty.IMAGE_MESSAGE,
		},
		{
			title: 'Empty.IMAGE_DEVICE',
			text: '暂无设备',
			content: Empty.IMAGE_DEVICE,
		},
		{
			title: 'Empty.IMAGE_HOUSE',
			text: '暂无房屋',
			content: Empty.IMAGE_HOUSE,
		},
		{
			title: 'Empty.IMAGE_DEFAULT',
			text: '暂无数据',
			content: Empty.IMAGE_DEFAULT,
		},
	];
	return (
		<ConfigProvider>
			<Switch
				style={{ marginBottom: '16px' }}
				checkedChildren="彩色"
				unCheckedChildren="单色"
				checked={colorful}
				onChange={() => {
					setColorful(!colorful);
				}}
			/>
			<List
				grid={{ gutter: 8, column: 6 }}
				dataSource={colorful ? colorfulData : data}
				renderItem={(item) => (
					<List.Item>
						<Card
							hoverable
							// bordered={false}
							cover={item.content}
						>
							<Meta
								style={{ textAlign: 'center' }}
								description={<Paragraph copyable={{ text: item.title }}>{item.text}</Paragraph>}
							/>
						</Card>
					</List.Item>
				)}
			/>
		</ConfigProvider>
	);
};

export default Index;
```
### 基本参数
| 参数  | 说明 | 类型     | 默认值 |
| ----- | ---- | -------- | ------ |
| title | 标题 | `string` | -      |

[Empty配置参考antd文档](https://ant.design/components/empty-cn/#API)