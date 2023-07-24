import { config } from '../utils/config';
import { Session } from '../utils/interfaces/session';

class TracksDataService {
  static getTracks(session: Session) {
    return fetch(`${config.apiUrl}search?q=${'krawczyk'}&type=${'track'}&limit=${6}`, {
      headers: {
        'Authorization': `Bearer ${session.accessToken}`
      }
    })
  }
}

export default TracksDataService;