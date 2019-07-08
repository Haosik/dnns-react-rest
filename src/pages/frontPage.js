import React from 'react';

import { AlbumsList } from '../components';

const FrontPage = ({ photosByAlbum }) => {
  return (
    <>
      <div className="container">
        <h1>Albums</h1>

        <AlbumsList photosByAlbum={Object.values(photosByAlbum)} />
      </div>
    </>
  );
};

export default FrontPage;
