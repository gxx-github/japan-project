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
