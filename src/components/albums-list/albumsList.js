import React from 'react';

import AlbumItem from './albumItem';
import { StyledList } from '../../styles/listingStyles';

const AlbumsList = ({ photosByAlbum }) => {
  return (
    <StyledList className="albums-list">
      {photosByAlbum.map(album => (
        <AlbumItem album={album} key={album[0].albumId} />
      ))}
    </StyledList>
  );
};

export default AlbumsList;
