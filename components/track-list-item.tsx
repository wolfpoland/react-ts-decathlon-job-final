import React from 'react';

import TrackListItemStyled from '../blocks/track-list-item/index';
import { Text } from '../blocks/shared/index';

const trackListItem = ({ albumName, artistName, image, onClick }) => (
  <TrackListItemStyled onClick={onClick}>
    <TrackListItemStyled.ArtistAvatar>
      <TrackListItemStyled.Icon />
      <img src={image.url} />
    </TrackListItemStyled.ArtistAvatar>
    <TrackListItemStyled.TrackInfo>
      <Text bold>{albumName}</Text>
      <Text>{artistName}</Text>
    </TrackListItemStyled.TrackInfo>
  </TrackListItemStyled>
);

export default trackListItem;