/*eslint no-throw-literal: "off"*/

import authStore from '../stores/authStore';

const read = response => {
  switch (response.status) {
    case 404:
      throw response.statusText;
    case 401:
      throw response.statusText;
    case 500:
      if (response.headers.get('content-type').indexOf('text/plain') !== -1 || response.headers.get('content-type').indexOf('text/html') !== -1) {
        return response.text().then(text => {
          throw text;
        });
      }
      try {
        return response.json().then(json => {
          throw json;
        });
      } catch (e) {
        throw { exception: e, description: 'unknown' };
      }
    default:
      try {
        if (response.headers.get('content-type').indexOf('text/html') !== -1) {
          return response.text();
        }
        if (response.headers.get('content-type').indexOf('application/pdf') !== -1) {
          return response.arrayBuffer();
        }
        return response.json();
      } catch (error) {
        return { message: 'error reading the response', error };
      }
  }
};

const get = (url, { headers = new Headers() } = { headers: new Headers() }) => {
  headers.append('Accept', 'application/json, text/plain, */*');
  return fetch(url, { method: 'GET', headers }).then(read);
};

const post = (url, { headers = new Headers(), data }) => {
  let body;
  if (data) {
    body = JSON.stringify(data);
  }
  headers.append('Accept', 'application/json, text/plain, text/html, */*');
  headers.append('Content-Type', 'application/json;charset=UTF-8');
  return fetch(url, { method: 'POST', headers, body }).then(read);
};

const put = (url, { headers = new Headers(), data }) => {
  let body;
  if (data) {
    body = JSON.stringify(data);
  }
  headers.append('Accept', 'application/json, text/plain, */*');
  headers.append('Content-Type', 'application/json;charset=UTF-8');
  return fetch(url, { method: 'PUT', headers, body }).then(read);
};

const del = (url, { headers = new Headers() }) => {
  headers.append('Accept', 'application/json, text/plain, text/html, */*');
  return fetch(url, { method: 'DELETE', headers }).then(read);
};

export default {
  get,
  post,
  put,
  delete: del,
  withBearer: {
    get: (url, { headers = new Headers() } = { headers: new Headers() }) => {
      headers.append('Authorization', `${authStore.token}`);
      return get(url, { headers });
    },
    post: (url, { data, headers = new Headers() }) => {
      headers.append('Authorization', `${authStore.token}`);
      return post(url, { data, headers });
    },
    put: (url, { data, headers = new Headers() }) => {
      headers.append('Authorization', `${authStore.token}`);
      return put(url, { data, headers });
    },
    delete: (url, { headers = new Headers() } = { headers: new Headers() }) => {
      headers.append('Authorization', `${authStore.token}`);
      return del(url, { headers });
    }
  }
};
