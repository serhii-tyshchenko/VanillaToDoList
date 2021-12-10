const { merge } = require('webpack-merge');

const {baseConfig, devConfig, prodConfig} = require ('./webpack');

const configMap = {
  development: merge(baseConfig, devConfig),
  production: merge(baseConfig, prodConfig),
}

module.exports = configMap[process.env.NODE_ENV];
