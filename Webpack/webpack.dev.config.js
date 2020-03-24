const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig(true), {
    mode: 'development'
});
