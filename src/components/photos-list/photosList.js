import React from 'react';

import PhotoItem from './photoItem';
import { StyledList } from '../../styles/listingStyles';

const PhotosList = ({ photos }) => {
  // const photosAlbums =
  return (
    <StyledList>
      {photos.map(item => (
        <PhotoItem photo={item} key={item.id} />
      ))}
    </StyledList>
  );
};

export default PhotosList;
