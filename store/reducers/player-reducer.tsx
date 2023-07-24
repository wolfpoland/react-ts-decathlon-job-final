import { ActionTypes, ActionsUnion } from '../actions/player';
import { Track } from '../../utils/interfaces/track';

interface PlayerState {
  readonly trackToPlay: Track;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: boolean;
}

const initialState: PlayerState = {
  error: false,
  loaded: false,
  loading: false,
  trackToPlay: null
}

const playerReducer = (state = initialState, action: ActionsUnion) => {
  switch (action.type) {

    case ActionTypes.setTrackToPlay: {
      console.log('zaszlo : ', action.payload);
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
        trackToPlay: action.payload
      }
    }

    default: {
      return state;
    }
  }

}

export default playerReducer;