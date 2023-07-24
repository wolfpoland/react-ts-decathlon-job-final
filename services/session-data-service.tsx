import { Utils } from '../utils/utils';
import { config } from '../utils/config';

export const endpoints = {
  proxy: 'https://cors-anywhere.herokuapp.com/',
  getAuthToken: 'https://accounts.spotify.com/api/token'
};

class SessionDataService {
  static getAccessToken() {
    return fetch(endpoints.proxy + endpoints.getAuthToken, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": config.authSecret
      },
      body: Utils.searchParams(config.params)
    });
  }
}

export default SessionDataService;