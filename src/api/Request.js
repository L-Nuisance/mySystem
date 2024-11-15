import baseUrl from "./BaseUrl";
import axios from "axios";
import { ElMessage } from "element-plus";

/**
 * 设置请求拦截
 */
axios.interceptors.request.use(
  (config) => {
    config.headers["Token"] = "token"; //设置请求头部token
    config.headers["Content-Type"] = "application/json"; //设置请求头部内容类型
    // 其他请求前设置

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 设置返回拦截
 */
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("请求出错：" + error);
    ElMessage({
      message: error.message,
      type: "error",
    });
  }
);

/**
 * 封装GET请求
 * @param {*} params
 * @param {*} url
 * @returns
 */
const get = (params, url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * 封装POST请求
 * @param {*} params
 * @param {*} url
 * @returns
 */
const post = (params, url) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * 封装全部请求
 * @param {*} method
 * @param {*} params
 * @param {*} url
 */
const request = (method, params, url) => {
  const requestUrl = baseUrl + url;
  return new Promise((resolve, reject) => {
    switch (method) {
      case "get": {
        get(params, requestUrl)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
        break;
      }
      case "post": {
        post(params, requestUrl)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      }
    }
  });
};

// 暴露最终封装
export default request;
