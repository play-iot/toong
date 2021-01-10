module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  semi: true,
  tabWidth: 2,
  useTabs: false,
  ...require('./node_modules/@grafana/toolkit/src/config/prettier.plugin.config.json'),
};
