const fs = require('fs')
const webpack = require('webpack')
const config = require('./base.js')
const WebpackDevServer = require('webpack-dev-server')

const host = 'http://localhost'
const port = 5555

config.mode = 'development'
config.entry.app.unshift('webpack-dev-server/client?' + host + ':' + port)

const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {
    // https: {              //开启的端口可以通过https访问
    //     key: fs.readFileSync('/Users/huaganshang/Downloads/certs/mdf.key'),
    //     cert: fs.readFileSync('/Users/huaganshang/Downloads/certs/mdf.crt')
    // },
    quiet: false,
    stats: {
        colors: true
    },
    disableHostCheck: true,
    compress: true,
    publicPath: host + ':' + port,
    contentBase: '../dist/', //默认情况下，webpack-dev-server会从项目的根目录提供文件，可以通过此选项设置文件的目录名
    historyApiFallback: true, //当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
}).listen(port)