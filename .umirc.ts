import { defineConfig } from 'dumi';
export default defineConfig({
  title: '常用组件库',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://s1.imagehub.cc/images/2023/02/13/ec959c634558cea731bd3a03056b5597.png',
  outputPath: 'docs-dist',
  apiParser: {},
  extraBabelPlugins: [
    // 本地文档按需加载样式
    [
      'import',
      {
        libraryName: 'base-component',
        camel2DashComponentName: false,
        libraryDirectory: 'src',
        style: true,
      },
      'base-component',
    ],
    // antd 按需加载
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
      'antd',
    ],
  ],
  // more config: https://d.umijs.org/config
});
