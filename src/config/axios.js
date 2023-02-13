import axios from 'axios'
import CONFIG from './config'
/**
 * @description: 获取请求的绝对链接地址
 * @param {type} 
 * @return: 
 */
function getUrl(url = '') {
    if (!/[http|https]:\/\//gi.test(url)) {
        url = url.replace(/^\[(\w+)\]?/g, (reg, key) => {
            return CONFIG[key] || ''
        })
    }
    return url
}

/**
 * @description: 获取请求的配置信息
 * @param {type} 
 * @return: 
 */
async function getConfig(config) {
    config.url = getUrl(config?.url ?? '')
    config.params = { ...config?.params, v: 1.0 } ?? {}
    return new Promise((resolve) => {
        resolve(config)
    })
}

//axios请求实例
const instance = axios.create({
    timeout: 10000,
    withCredentials: true,
})

// 添加请求拦截器
instance.interceptors.request.use(
    async (config) => {
        return await getConfig(config)
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    (res) => {
        const { data = {}, status = 0, } = res
        const { code = 0, message = "",msg = '' } = data
        if (status === 200 && code === 200 || status === 200 && code === 0) {
            return data ?? {}
        } else {
            // 提示错误信息-可根据选用Ui框架美化
            alert(message | msg)
            return data ?? {}
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default instance