import request from "@/utils/request";

// 获取Nft列表
export function fetchGetNftList(data: any) {
  return request({
    url: `/privasea/nfts`,
    method: "POST",
    data
  });
}
// 领取空投提交
export function fetchToClaim(data: any) {
  return request({
    url: `/privasea/createAddr`,
    method: "POST",
    data
  });
}

//查询用户领取信息
export function fetchUserClaimInfo(data: any) {
  return request({
    url: `/privasea/getAddr`,
    method: "POST",
    data
  });
}
//管理员导出空投Excel
export function fetchExport(data: any) {
  return request({
    url: `/privasea/export`,
    method: "POST",
    data
  });
}
//创造Nft上传
export function fetchCreatNft(data: any) {
  return request({
    url: `/privasea/createNft`,
    method: "POST",
    data
  });
}

//管理员登录

export function fetchLogin(data?: any) {
  return request({
    url: `/privasea/login`,
    method: "POST",
    data
  });
}
//管理人员删除
export function fetchDelet(data: any) {
  return request({
    url: `/privasea/deleteNft`,
    method: "POST",
    data
  });
}

//增加用户/修改用户密码
export function fetchAddUser(data: any) {
  return request({
    url: `/privasea/createUser`,
    method: "POST",
    data
  });
}
//删除用户
export function fetchDelUser(data: any) {
  return request({
    url: `/privasea/delUser`,
    method: "POST",
    data
  });
}
//查看当前用户信息
export function fetchUserInfo(data: any) {
  return request({
    url: `/privasea/userInfo`,
    method: "POST",
    data
  });
}
//查看所有用户信息
export function fetchUserList(data: any) {
  return request({
    url: `/privasea/userList`,
    method: "POST",
    data
  });
}