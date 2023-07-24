import { ActionTypes, ActionsUnion } from '../actions/tracks';
import { Track } from '../../utils/interfaces/track';

interface TracksState {
  readonly tracks: Track[];
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: boolean;
}

const initialState: TracksState = {
  error: false,
  loaded: false,
  loading: false,
  tracks: null
}


const sessionReducer = (state = initialState, action: ActionsUnion) => {
  console.log('tracks: ', action);
  switch(action.type){

    case ActionTypes.getTracks: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
        tracks: null
      }
    }

    case ActionTypes.getTracksSuccess: {
      return  {
        ...state,
        loading: false,
        loaded: true,
        error: false,
        tracks: action.payload
      }
    }

    default: {
      return state;
    }
  }
}


export default sessionReducer;