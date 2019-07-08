import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';

import { ALBUM_ROUTE } from '../../constants/routes';
import { StyledItem } from '../../styles/listingStyles';
import { ReactComponent as DefaultImage } from '../../logo.svg';

const AlbumItem = ({ album }) => {
  return (
    <StyledItem className="albums-item">
      <Link to={`${ALBUM_ROUTE}${album[0].albumId}`}>
        <h4>Album {album[0].albumId}</h4>
        <span className="albums-item__box">
          <Img
            src={[album[0].thumbnailUrl, DefaultImage]}
            alt="Photo album thumbnail"
            crossorigin="anonymous"
            className="albums-list__img"
          />
        </span>
      </Link>
    </StyledItem>
  );
};

export default AlbumItem;
