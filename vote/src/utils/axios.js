import axios from 'axios'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    return{...config,headers:{...config.headers,"authorization":`Bearer ${window.localStorage.token}`
}}  
    

}, function (error) {
    return Promise.reject(error);
})

export default axios