import http from './fetch';
const dataAssign = {
  result: false,
};
// 获取基金产品
export const postAllGoods = (params, callback) => {
  return http.fetchPost('/data', params, dataAssign, callback)
};
