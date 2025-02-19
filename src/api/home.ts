import request from "@/utils/request";

// 获取总金额
export function fetchGetTotalAmount() {
  return request({
    url: `/registration/selectCountAmount`,
    method: "GET",
  });
}

// 获取总人数
export function fetchGetTotalAddress() {
  return request({
    url: `/registration/selectCount`,
    method: "GET",
  });
}
