let throttleTimer = false;

export const throttle = (callback: any, time: number) => {
  if (throttleTimer) return;

  // 这里标记一下，以使函数不会重复执行
  throttleTimer = true;

  setTimeout(() => {
    // 到了指定的时间，调用传入的回调函数
    callback();
    throttleTimer = false;
  }, time);
};
