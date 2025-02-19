import request from "@/utils/request";

// 获取排行榜列表
export function getPowerList(data: any) {
  return request({
    url: `/registration/selectPage`,
    method: "GET",
    data,
  });
}
