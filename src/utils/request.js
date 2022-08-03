import axios from 'axios';

// 创建对象，自定义实例默认值
const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否为开发环境
  baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
  timeout: 5000 // 请求延迟时间，如果请求超过了这个时间，请求中断
});

// 请求拦截器，拦截请求前对数据进行处理
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

// 相应拦截器，拦截请求后对数据进行处理
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      Promise.reject();
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

export default service;
