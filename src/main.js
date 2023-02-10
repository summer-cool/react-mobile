import React from 'react'
import ReactDom from 'react-dom'
//引入多语插件
import resources from './lang'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//引入全局样式
import '@assets/style/reset'
import '@assets/style/common'
//引入全局状态管理
import { Provider } from 'mobx-react'
import stores from './store/index'
//引入入口文件
import App from './App'


if(!window.URLSearchParams){ //兼容低版本
    window.URLSearchParams = require('url-search-params')
}
URLSearchParams.prototype.add = function(para){
    if(para instanceof Object){
        for(let k in para){
            this.delete(k)
            this.append(k, para[k])
        }
    }
}

const LANG = 'zh-cn'
window.locale = LANG
document.documentElement.setAttribute('lang', LANG)

//多语配置
i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'zh_cn',
    lng: LANG, //当前语言
    interpolation: {
        escapeValue: false
    }
})

ReactDom.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.querySelector('#app')
)