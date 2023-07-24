import React from 'react';

import Controls from '../components/controls';
import TrackProgress from '../components/track-progress';
import MediaPanelStyled from '../blocks/media-panel/index';

const mediaPanel = () => (
    <MediaPanelStyled>
      <Controls />
      <TrackProgress />
    </MediaPanelStyled>
);


export default mediaPanel;