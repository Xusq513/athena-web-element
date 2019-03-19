import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/User/all',
    method: 'get',
    params
  })
}
