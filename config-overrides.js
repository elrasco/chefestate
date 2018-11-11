const rewireMobX = require('react-app-rewire-mobx');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);

  config = rewireLess.withLoaderOptions({
    //default variables https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    modifyVars: {
      '@orange': '#f65628',
      '@primary-color': 'rgba(246, 86, 40, 0.6)',
      /* '@primary-color': 'color(~`colorPalette("#6b676e", 3)`)', */
      '@border-radius-base': '2px',
      '@btn-height-base': '@btn-height-lg',
      '@input-height-base': '@input-height-lg',
      '@background-color-base': '#FFFFFF',
      '@layout-body-background': '@background-color-base',
      '@border-color-split': 'hsv(0, 0, 50%); ',
      '@font-family': "'Raleway', sans-serif",
      '@component-background': '#FFFFFF',
      '@border-color-split': 'rgba(0, 0, 0, 0.137255)',
      '@border-radius-sm': '5px'
    },
    javascriptEnabled: true
  })(config, env);

  config = rewireMobX(config, env);

  return config;
};
