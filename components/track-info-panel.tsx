import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';

import { config } from '../utils/config';
import { Track } from '../utils/interfaces/track';
import TrackInfoPanelStyled from '../blocks/track-info-panel/index';
import { Text } from '../blocks/shared/index';

interface ITrackInfoPanelState {
  height: number;
}

interface ITrackInfoPanelProps {
  trackToPlay: Track;
  trackIsReady: boolean;
}

class TrackInfoPanel extends Component<ITrackInfoPanelProps, ITrackInfoPanelState> {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
  }

  getWindowHeight = () => {
    const height = window.innerHeight;
    if (!!height) {
      this.setState({ height: height });
      console.log('height: ', window.innerHeight);
    }
  }

  debounceGetWindowHeight = debounce(this.getWindowHeight, 200);

  componentDidMount() {
    this.getWindowHeight();
    window.addEventListener('resize', this.debounceGetWindowHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceGetWindowHeight);
  }

  render() {
    return (
      <TrackInfoPanelStyled>
        <TrackInfoPanelStyled.Cover>
          <img src={this.props.trackIsReady ? this.props.trackToPlay.album.imageMidRes.url : config.catInSpace} />
        </TrackInfoPanelStyled.Cover>
        <TrackInfoPanelStyled.TrackInfo>
          <Text bold marginBottom="15px">
            {this.props.trackIsReady ? this.props.trackToPlay.album.name : 'Kliknij aby wybrac utwor'}
          </Text>
          <Text height={this.state.height}>
            {this.props.trackIsReady ? this.props.trackToPlay.artistName : 'Patryk Krasuski'}
          </Text>
        </TrackInfoPanelStyled.TrackInfo>
      </TrackInfoPanelStyled>
    );
  }
}

const mapStateToProps = state => {
  console.log(' TrackInfoPanel STATE: ', state);
  const { trackToPlay } = state.playerReducer;
  console.log('track to Play: ', trackToPlay, !!trackToPlay);

  return {
    trackToPlay,
    trackIsReady: !!trackToPlay
  }
}

export default connect(mapStateToProps)(TrackInfoPanel);