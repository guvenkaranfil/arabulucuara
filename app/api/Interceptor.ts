import axios, {AxiosError} from 'axios';
import {changeToken} from '../stores/features/user/UserSlice';
import globalStore from '../stores/RootStore';

let isRefreshing = false;
let subscribers = [];

function subscribeTokenRefresh(cb) {
  subscribers.push(cb);
}

function onRrefreshed(token) {
  subscribers.map((cb, index) => {
    console.log('rt index:', index);
    cb(token);
  });
}

export const Interceptor = () => {
  axios.interceptors.request.use(
    request => {
      console.log('globalStore:', globalStore.getState());
      if (!request?.url?.includes('/refresh?t=')) {
        request.headers.Authorization = `Bearer ${globalStore.getState().user.token}`;
      } else {
        console.log('token refreshing do not add bearer token');
      }

      return request;
    },
    error => {
      console.log('error:');
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(undefined, (error: AxiosError) => {
    const {config, response} = error;

    const originalRequest = config;

    if (response?.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        refreshToken(globalStore.getState().user.refreshToken)
          .then(tokenResponse => {
            const {data} = tokenResponse;
            globalStore.dispatch(changeToken({token: data.token.token}));
            isRefreshing = false;
            onRrefreshed(data.token.token);

            subscribers = [];
          })
          .catch(() => alert('Sistemde bir hata oluştu. Lütfen tekrar giriş yapınız'));
      }

      return new Promise(resolve => {
        subscribeTokenRefresh(token => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(axios(originalRequest));
        });
      });
    }
    return Promise.reject(error);
  });
};

async function refreshToken(userRefreshToken: string) {
  return axios.get(`https://api.arabulucuara.com/Account/refresh?t=${userRefreshToken}`);
}
