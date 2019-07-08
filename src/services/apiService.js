import { PHOTOS_URL } from './../constants/api';

const getPhotos = id => (id ? global.fetch(`${PHOTOS_URL}/${id}`) : global.fetch(PHOTOS_URL));

export default {
  getPhotos
};
