import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Track } from '../utils/interfaces/track';
import TrackListItem from '../components/track-list-item';
import TrackListStyled from '../blocks/track-list/index';
import { SetTrackToPlay } from '../store/actions/player';

interface TaskListProps {
  tracks: Track[];
  dispatch: Function;
}

class TrackList extends Component<TaskListProps> {

  onTrackListItemClick = (track: Track) => {
    console.log('props: ', this.props, track);
    this.props.dispatch(new SetTrackToPlay(track).plainAction());
  }

  render() {
    return (
      <TrackListStyled>
        {this.props.tracks && this.props.tracks.map(track => (
          <TrackListItem
            key={track.id}
            image={track.album.image}
            artistName={track.artistName}
            albumName={track.album.name}
            onClick={this.onTrackListItemClick.bind(this, track)} />
        ))}
      </TrackListStyled>
    );
  }
}

const mapStateToProps = state => {
  console.log('STATE: ', state);
  const { tracks } = state.tracksReducer;
  return {
    tracks
  }
}

export default connect(mapStateToProps)(TrackList);