import axios from 'axios'
let instance = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 40000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  console.log('在发送请求之前做些什么');
  return config;
}, function (error) {
  console.log('对请求错误做些什么');
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  console.log('对响应数据做点什么');
  return response;
}, function (error) {
  console.log('对响应错误做点什么');
  return Promise.reject(error);
});

export default instance;
