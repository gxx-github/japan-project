import request from "@/utils/request";

// 增加订单
export function fetchAddOrder(data: any) {
  return request({
    url: `/orders/addOrders`,
    method: "POST",
    data,
  });
}

//获取链和币
export function fetchGetNetworkBit() {
  return request({
    url: `/blockchain/selectblockchain`,
    method: "GET",
  });
}

//转账校验
export function fetchVailTransfer(data: any) {
  return request({
    url: `/blockchain/verifyAddress`,
    method: "POST",
    data,
  });
}
