import request from '@/utils/request'

export function login(loginId, passwd) {
  return request({
    url: '/User/login',
    method: 'post',
    data: {
      loginId,
      passwd
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/User/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
