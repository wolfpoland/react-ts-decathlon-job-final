import { AccessToken } from './interfaces/access-token';

export namespace Utils {
  export const saveInLocalStorage = (objectToSave: AccessToken) => {
    try {
      localStorage.setItem('session', JSON.stringify(objectToSave));
    } catch { }
  }

  export const loadSessionFromLocalStorage = () => {
    try {
      const loadedSession = JSON.parse(localStorage.getItem('session'));
      if (!!loadedSession) {
        return loadedSession;
      } else {
        return null;
      }
    } catch (e) {
      console.log('Error: ', e);
      localStorage.removeItem('session');
      return null;
    }
  }

  export const countExperationDate = (tokenTime) => new Date(Date.now() + tokenTime * 1000);
  export const updateExperationDate = (prevTime) => new Date(new Date(prevTime).getTime() - Date.now() / 1000);


  export const searchParams = params => {
    return Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&')
  }

}