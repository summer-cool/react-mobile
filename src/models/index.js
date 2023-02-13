import instance from '@/config/axios'

const postAddParams = (data) => {//post请求添加参数方法
    let params = new URLSearchParams(),
        dataKeys = Object.keys(data)
    if(!dataKeys.length){return}
    dataKeys.forEach((key) => {
        params.append(key,data[key])
    })
    return params
}
//----格式定义实例 可根据项目分为更细致目录结构
/**
 * @description: --接口说明 --wiki:贴上wiki地址
 * @param {Object} params 参数对象 
 * @return:
 */
export const axiosTest = (params = {}) => {
    return instance.get('[testHost]/test', {params: params})
}
/**
 * @description: --接口说明 --wiki:贴上wiki地址
 * @param {Object} params 参数对象 
 * @return:
 */
export const axiosTestPost = (params = {}) => {
  return instance.post('[testHost]/test', postAddParams(params))
}

export default{
  axiosTest
}