export default {
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  esm: 'babel',
  cjs: 'babel',
  extractCSS: true,
  entry: 'src/index.ts',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
  ],
};
