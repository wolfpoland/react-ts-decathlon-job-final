import { Action } from '../../utils/models/action';
import { Track } from '../../utils/interfaces/track';
import { Howl } from 'howler';

let player;

export enum ActionTypes {
  setTrackToPlay = '[Player] Set track to play',
  playTrack = '[Player] Play track',
}

export class SetTrackToPlay extends Action {
  constructor(public payload: Track) {
    super(ActionTypes.setTrackToPlay, payload);
    console.log('payload: ', payload)
  }

  plainAction() {
    return dispatch => {
      dispatch(super.plainAction());
      dispatch(new PlayTrack().plainAction());
    }
  }
}


export class PlayTrack extends Action {
  constructor() {
    super(ActionTypes.playTrack)
  }

  plainAction() {
    return (dispatch, state) => {
      const _state = state();
      const { trackToPlay } = _state.playerReducer;

      if (!!player) {
        player.stop();
      }
      console.log('trackToPlay: ', trackToPlay);
      player = new Howl({
        src: [trackToPlay.previewUrl],
        html5: true
      });
      player.play();
    }
  }
}

export type ActionsUnion = PlayTrack | SetTrackToPlay;
