import { ActionTypes, ActionsUnion } from '../actions/session';
import { Session } from '../../utils/interfaces/session';

interface SessionState {
  readonly session: Session;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: boolean;
}

const initialState: SessionState = {
  error: false,
  loaded: false,
  loading: false,
  session: null
}

const sessionReducer = (state = initialState, action: ActionsUnion) => {
  console.log('action: ', action);
  switch (action.type) {

    case ActionTypes.getSession: {
      console.log('zaszlo: ', ActionTypes.getSession);
      return {
        ...state,
        loading: true,
        error: false,
        loaded: false
      }
    }

    case ActionTypes.getSessionSuccess: {
      console.log('payload: ', action.payload)
      return {
        ...state,
        loading: false,
        loaded: true,
        session: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export default sessionReducer;
