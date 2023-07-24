import styled from 'styled-components';

import ArtistAvatar from './artist-avatar';
import TrackInfo from './track-info';
import Icon from './icon';

const trackListItem = styled.div`
  display: flex;
  align-items: center;
  max-height: 200px;
  padding: 50px 20px;
  width: 100%;
  background-color: white;
  overflow: hidden;

  &:hover{
    background-color: lightgray;
    cursor: pointer;

    svg{
      display: block;
    
    }
  }
`;

trackListItem.ArtistAvatar = ArtistAvatar;
trackListItem.TrackInfo = TrackInfo;
trackListItem.Icon = Icon;

export default trackListItem;