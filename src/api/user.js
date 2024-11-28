// 获取用户token
export const getToken = () => {
  console.log(localStorage.getItem("mySystem-token"));

  if (localStorage.getItem("mySystem-token") === undefined) {
    return false;
  } else {
    return localStorage.getItem("mySystem-token");
  }
};
