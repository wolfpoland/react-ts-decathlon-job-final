import React from 'react';
import styled from 'styled-components';

import TrackProgressStyled from '../blocks/track-progress';

const trackProgress = () => (
  <TrackProgressStyled>
    <TrackProgressStyled.TimeLabel>
      2:32
    </TrackProgressStyled.TimeLabel>
    <TrackProgressStyled.Input type="range" />
    <TrackProgressStyled.TimeLabel>
      4:32
    </TrackProgressStyled.TimeLabel>

  </TrackProgressStyled>
);

export default trackProgress;