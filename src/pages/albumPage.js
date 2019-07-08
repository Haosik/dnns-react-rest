import React from 'react';

import { PhotosList } from '../components';

const AlbumPage = props => {
  return (
    <>
      <div className="container">
        <h1>Album {props.match.params.albumId} photos:</h1>
        <PhotosList photos={props.onFilterByAlbum(props.match.params.albumId)} />
      </div>
    </>
  );
};
export default AlbumPage;
