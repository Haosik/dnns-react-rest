import api from '../services/apiService';

const TOTAL_IMAGES = 300;

export const sortByAlbum = photos => {
  const slicedPhotos = photos.slice(0, TOTAL_IMAGES);
  const albumsHashMap = slicedPhotos.reduce((acc, el) => {
    const { albumId } = el;
    acc.hasOwnProperty(albumId) ? acc[albumId].push(el) : (acc[albumId] = [el]);
    return acc;
  }, {});
  return albumsHashMap;
};

// id argument for testing purposes (in other case 5000 items may fail test)
export const getPhotosFromApi = async id => {
  const resp = await api.getPhotos(id);
  const respPhotos = await resp.json();
  return respPhotos;
};

export default {
  sortByAlbum,
  getPhotosFromApi
};
