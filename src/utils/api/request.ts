import {storeGetItem, storeSetItem} from '../storage';

const baseUrl = 'http://localhost:3000';

export enum ContentType {
  json = 'application/json;charset=UTF-8',
  form = 'application/x-www-form-urlencoded; charset=UTF-8',
}

export enum HttpMethod {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
}

export interface IReqConfig {
  body?: any;
  method?: string;
  headers?: IHeader;
  token?: string;
  'Content-Type'?: string;
}

export interface IHeader {
  'Content-Type'?: string;
  'X-Requested-With'?: string;
  token?: string;
  [propName: string]: any;
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.message = response;
  throw error;
}
// fetch超时处理
const TIMEOUT = 100000;
const timeoutFetch = (request: Request) => {
  let fetchPromise = fetch(request);
  let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('请求超时')), TIMEOUT);
  });
  return Promise.race([fetchPromise, timeoutPromise]);
};

async function fetchPost(url: string, data = {}) {
  const accessToken = await storeGetItem('token');
  console.log('token::::', accessToken);
  //   const refreshToken = '__NULL__';

  let headers = new Headers();
  let body;
  if (data instanceof FormData) {
    body = data;
  } else {
    if (headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json;charset=utf-8');
    } else {
      headers.append('Content-Type', 'application/json;charset=utf-8');
    }

    // if (url === '/user/token' && refreshToken) {
    //   data.token = refreshToken;
    // }
    body = JSON.stringify(data);
  }

  if (accessToken) {
    headers.append('Authorization', `Bearer ${accessToken}`);
  }

  let request = new Request(baseUrl + url, {
    method: 'post',
    headers,
    body,
  });
  return timeoutFetch(request)
    .then(checkStatus)
    .then(parseJSON)
    .then(filterCode)
    .catch(err => {
      console.log(err);
    });
}

function filterCode(res) {
  const {data, errono} = res;
  if (errono === -1) {
    message.error(res.message);
    return;
  }

  if (!data) {
    return res.message;
  }

  let code = data.code;

  if (!code) {
    return data;
  }

  message.error(res.message);

  // switch(code) {
  //   case 900000401:
  //     console.error(res.message);
  //     break;
  //   case 900000403:
  //     console.error(res.message);
  //     break;
  // }
}

const request = (url: string, config: IReqConfig) => {
  if (!config || !config.method || config.method === 'GET') {
    let request = new Request(baseUrl + url, {
      ...config,
    });
    return timeoutFetch(request)
      .then(checkStatus)
      .then(parseJSON)
      .then(filterCode)
      .catch(err => {
        console.log(err);
      });
  } else {
    return fetchPost(url, config.body);
  }
};

export {request};
