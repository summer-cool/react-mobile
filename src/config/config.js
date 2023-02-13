let config = {
    development: { //本地开发
        testHost: 'https://wwww.baidu.com',                           //后端接口地址
    },
    daily: { //日常环境
        testHost: 'https://wwww.baidu.com',                           //后端接口地址
    },
    pre: { //预发布环境
        testHost: 'https://wwww.baidu.com',                           //后端接口地址
    },
    production: { //线上环境
        testHost: 'https://wwww.baidu.com',                           //后端接口地址
    },
}
module.exports = config[__ENV__]