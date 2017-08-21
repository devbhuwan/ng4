const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {

    devtool: 'cheap-module-source-map',

    externals: [
        /^\@angular\//,
        /^rxjs\//,
        'moment',
        'raphael'
    ],

    output: {
        filename: './bundles/[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        chunkFilename: '[id].chunk.js'
    },

    entry: {
        "ng4-core": "./index.ts"
    }
});
