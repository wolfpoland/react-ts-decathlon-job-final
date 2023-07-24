import SessionDataService from '../../services/session-data-service';
import { Session } from '../../utils/interfaces/session';
import { Utils } from '../../utils/utils';
import { Action } from '../../utils/models/action';
import { GetTracks } from './tracks';

export enum ActionTypes {
  getSession = '[Session] Get Session',
  getSessionSuccess = '[Session] Get Session Success',
  getSessionError = '[Session] Get Session Error',
}

export class GetSession extends Action {
  constructor() {
    super(ActionTypes.getSession);
  }

  acquireSession(dispacht) {
    SessionDataService.getAccessToken()
      .then(res => {

        res.json().then(data => {
          const mapToModel = {
            accessToken: data.access_token,
            expiresIn: Utils.countExperationDate(data.expires_in),
            scope: data.scope,
            tokenType: data.token_type
          }
          Utils.saveInLocalStorage({
            ...mapToModel
          })
          dispacht(new GetSessionSuccess(mapToModel).plainAction());

        })
      })
      .catch(err => {
        console.log('acquireSession error: ', err);
      })
  }

  plainAction() {
    return dispacht => {
      dispacht({ type: this.type });
      let session: Session = Utils.loadSessionFromLocalStorage();
      console.log('session: ', session);
      if (!!session && new Date(session.expiresIn).getTime() >= Date.now()) {
        console.log('lapie z localstorage');
        // session = {
        //   ...session
        // }
        // Utils.saveInLocalStorage(session);
        dispacht(new GetSessionSuccess(session).plainAction());

      } else {
        this.acquireSession(dispacht);
      }
    }
  }
}

export class GetSessionSuccess extends Action {
  constructor(public payload: Session) {
    super(ActionTypes.getSessionSuccess, payload);
  }

  plainAction() {
    return dispacht => {
      dispacht(super.plainAction());
      dispacht(new GetTracks().plainAction())
    }
  }
}

export class GetSessionError extends Action {
  constructor(public payload) {
    super(ActionTypes.getSessionError, payload)
  }
}

export type ActionsUnion = GetSession | GetSessionSuccess | GetSessionError;
