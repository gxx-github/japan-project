import request from "@/utils/request";

// 验证邀请码
export function verifyInviteCode(data: any) {
  return request({
    url: `/registration/selectCode`,
    method: "GET",
    data,
  });
}

// 获取twitter token
export function getTwitterToken(data: any) {
  return request({
    url: `/twitter/twitterUrl`,
    method: "GET",
    data,
  });
}

// 获取twitter用户信息
export function twitterUserInfo(data: any) {
  return request({
    url: `/twitter/twitterUserInfo`,
    method: "GET",
    data,
  });
}

// 验证推特是否注册过
export function twitterVerify(data: any) {
  return request({
    url: `/twitter/selectTt`,
    method: "GET",
    data,
  });
}

// 保存注册
export function register(data: any) {
  return request({
    url: `/registration/addRegistration`,
    method: "POST",
    data,
  });
}

// 查询钱包是否注册过
export function verifyWallet(data: any) {
  return request({
    url: `/registration/usableNot`,
    method: "GET",
    data,
  });
}

// 获取用户信息
export function getUserInfo(data: any) {
  return request({
    url: `/registration/selectAddr`,
    method: "GET",
    data,
  });
}
