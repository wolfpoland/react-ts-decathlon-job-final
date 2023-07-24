import TracksDataService from '../../services/tracks-data-service';
import { Action } from '../../utils/models/action';
import { config } from '../../utils/config';
import { Track } from '../../utils/interfaces/track';


export enum ActionTypes {
  getTracks = '[Tracks] Get Tracks',
  getTracksSuccess = '[Tracks] Get Tracks Success',
  getTracksError = '[Tracks] Get Tracks Error',
}

export class GetTracks extends Action {
  constructor() {
    super(ActionTypes.getTracks)
  }

  plainAction() {
    return (dispatch, state) => {
      const sessionState = state();
      const { session } = sessionState.sessionReducer;

      dispatch({ type: this.type });

      TracksDataService.getTracks(session).then(async res => {
        const data = await res.json();

        const tracks: Track[] = data.tracks.items.map(item => ({
          id: item.id,
          artistName: item.artists[0].name,
          name: item.name,
          previewUrl: item.preview_url,
          album: {
            name: item.album.name,
            image: item.album.images[2],
            imageMidRes: item.album.images[1]
          }
        }))

        dispatch(new GetTracksSuccess(tracks).plainAction())
      })
    }
  }
}

export class GetTracksSuccess extends Action {
  constructor(public payload: Track[]) {
    super(ActionTypes.getTracksSuccess, payload)
  }

}


export type ActionsUnion = GetTracks;