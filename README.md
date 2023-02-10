## 技术栈
- React: https://react.docschina.org/
- React-router-dom: http://react-guide.github.io/react-router-cn/docs/API.html
- Mobx: https://cn.mobx.js.org/
- eslint规则
    - eslit规则: https://eslint.bootcss.com/docs/rules/
    - vscode 修改tab为4个空格
        ```
        "editor.tabSize": 4,
        "editor.detectIndentation": false,
        ```

## 本地开发环境
1. npm i
2. npm run dev
3. 浏览器访问：localhost:5555

## 测试环境打包
- npm run test-build

## 日常环境打包
- npm run daily-build

## 预发布环境打包
- npm run pre-build

## 生产环境打包
- npm run dist-build

## 目录别名
- @: './src'
- @utils: './src/utils'
- @models: './src/models'
- @pages: './src/pages'
- @assets: './src/assets'
- @components: './src/components'

## 获取当前环境
- process.env.NODE_ENV
    - development:  本地开发环境
    - test:         测试环境
    - pre:          预发布环境
    - production:   生产环境

## 目录结构
```
├── jsconfig.json
├── .babelrc
├── package-lock.json
├── package.json
├── postcss.config.js
├── readMe.md
├── src
│   ├── App.js                                      # 入口文件
│   ├── assets                                      # 静态资源，参与打包编辑
│   │   ├── images
│   │   └── style
│   │       ├── base.js里进行了覆盖
│   │       ├── common.css                          # 全局样式
│   │       └── reset.css                           # 重置样式
│   ├── components                                  # 公共组件
│   ├── config                                      # 配置文件
│   │   ├── axios.js                                # http 请求拦截
│   │   └── config.js                               # 域名配置文件
│   ├── lang                                        # 多语
│   │   ├── en.js
│   │   ├── index.js
│   │   ├── zh_cn.js
│   │   └── zh_tw.js
│   ├── main.js                                     # 主入口文件
│   ├── models                                      # model层，所有的请求放入这里，业务组件里只处理返回结果
│   │   └── home
│   ├── pages                                       # 页面
│   │   ├── designer
│   │   ├── detail
│   │   └── home
│   ├── router                                      # 路由配置
│   │   └── index.js
│   ├── static                                      # 静态资源，不参与打包，直接复制到打包后的dist目录
│   ├── store                                       # 状态管理
│   │   
│   ├── template
│   │   └── index.html                              # 模板文件
│   └── utils                                       # 工具类
│       
└── webpack
    ├── base.js
    ├── dev.js
    ├── pre.js
    ├── prod.js
    └── test.js
```