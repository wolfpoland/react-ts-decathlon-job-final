import styled from 'styled-components';

import Cover from './cover';
import TrackInfo from './track-info';

const trackInfoPanel = styled.div`
  flex: 2;
  display: flex;
`;

trackInfoPanel.Cover = Cover;
trackInfoPanel.TrackInfo = TrackInfo;

export default trackInfoPanel;