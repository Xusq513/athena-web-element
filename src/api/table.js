import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/User/pagination',
    method: 'get',
    params
  })
}
