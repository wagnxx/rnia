import {request} from './request';

export function getUserInfo(data) {
  return request('/api/login', {
    method: 'POST',
    body: data,
  });
}
export function verifyToken() {
  return request('/api/token', {
    method: 'POST',
  });
}
