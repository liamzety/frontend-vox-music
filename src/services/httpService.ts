import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://vox-music-api.herokuapp.com/api/'
    : '//localhost:3030/api/';

type methodType =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'
  | undefined;

export default {
  get(endpoint: string, data?: any) {
    return ajax(endpoint, 'GET', data);
  },
  post(endpoint: string, data?: any) {
    return ajax(endpoint, 'POST', data);
  },
  put(endpoint: string, data?: any) {
    return ajax(endpoint, 'PUT', data);
  },
  delete(endpoint: string, data?: any) {
    return ajax(endpoint, 'DELETE', data);
  },
};
async function ajax(
  endpoint: any,
  method: methodType = 'get',
  data: any = null
) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      withCredentials: true,
      method,
      data,
    });
    return res.data;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
    );
    throw err;
  }
}
