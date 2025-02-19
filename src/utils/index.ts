/**
 * @description: 判断移动端
 * @param  {*}
 * @return {*}
 */
export const judgeIsMobile = () => {
  if (
    window.navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true; // 移动端
  } else {
    return false; // PC端
  }
};

/**
 * @description: 获取浏览器参数
 * @param  {*}
 * @return {*}
 */
export const getQueryParam = (key: string) => {
  const queryStr = window.location.search.substr(1);
  const params = queryStr.split("&");
  for (let i = 0; i < params.length; i++) {
    const param = params[i].split("=");
    if (param[0] === key) {
      return decodeURIComponent(param[1]);
    }
  }
  return "";
};
