import api from '../services/apiService';

export const sortByAlbum = photos => {
  const albumsHashMap = photos.reduce((acc, el) => {
    const { albumId } = el;
    acc.hasOwnProperty(albumId) ? acc[albumId].push(el) : (acc[albumId] = [el]);
    return acc;
  }, {});
  return albumsHashMap;
};

export const getPhotosFromApi = async () => {
  const resp = await api.getPhotos();
  const respPhotos = await resp.json();
  return respPhotos;
};

export default {
  sortByAlbum,
  getPhotosFromApi
};
