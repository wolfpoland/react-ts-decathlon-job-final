import React from 'react';

import PanelStyled from '../blocks/panel/index';
import TrackInfoPanel from '../components/track-info-panel';
import MediaPanel from './media-panel';

const panel = () => (
  <PanelStyled>
    <TrackInfoPanel />
    <MediaPanel />
  </PanelStyled>
);

export default panel;