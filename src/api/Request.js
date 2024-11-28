import baseUrl from "./BaseUrl";
import axios from "axios";
import router from "@/router";
import { ElMessage } from "element-plus";

/**
 * 设置请求拦截
 */
axios.interceptors.request.use(
  (config) => {
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json"; //设置默认请求头部内容类型
    }
    config.headers["Authorization"] = "token"; //设置请求头部token
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
    // 后端token验证失败处理
    if (response.returnCode === "") {
      ElMessage.warning({ message: "未登录或登陆已过期" });
      router.replace({ name: "logIn" });
    }
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
const get = (params, url, config) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params }, config)
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
const post = (params, url, config) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
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
const request = (method, params, url, config) => {
  const requestUrl = baseUrl + url;
  return new Promise((resolve, reject) => {
    switch (method) {
      case "get": {
        get(params, requestUrl, config)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
        break;
      }
      case "post": {
        post(params, requestUrl, config)
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
