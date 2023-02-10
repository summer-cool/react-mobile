var { merge }  = require('webpack-merge')
let config = require('./base.js')
let ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

module.exports = merge(config, {
    devtool: 'false',
    optimization: {
        minimizer: [
            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                warnings: false,
                uglifyJS: {
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compress: {
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true
                    }
                }
            }),
        ],
        runtimeChunk: {
            'name': 'manifest',
        },
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                vendors: {
                    name: 'vender',
                    chunks: 'all',
                    priority: -10,
                    test: /[\\/]node_modules[\\/](react*)/,
                },
                mobx: {
                    name: 'mobx',
                    chunks: 'all',
                    priority: -10,
                    test: /[\\/]node_modules[\\/](mobx|mobx-react)/,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
});