import { sortByAlbum, getPhotosFromApi } from './photosService';
import { TOTAL_IMAGES } from './../constants/api';

describe('getPhotosFromApi', () => {
  it('should make API call and return data if api responded', async () => {
    expect(await getPhotosFromApi()).toMatchSnapshot();
  });
  it('should return limited number of items from API', async () => {
    expect(await getPhotosFromApi()).toHaveLength(TOTAL_IMAGES);
  });
});

describe('sortByAlbum', () => {
  const photos = [
    {
      albumId: 1,
      id: 1,
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952'
    },
    {
      albumId: 99,
      id: 88,
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796'
    },
    {
      albumId: 99,
      id: 199,
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796'
    }
  ];

  const expected = {
    1: [
      {
        albumId: 1,
        id: 1,
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952'
      }
    ],
    99: [
      {
        albumId: 99,
        id: 88,
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'https://via.placeholder.com/600/771796'
      },
      {
        albumId: 99,
        id: 199,
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
        title: 'reprehenderit est deserunt velit ipsam',
        url: 'https://via.placeholder.com/600/771796'
      }
    ]
  };

  it('should return sorted by albumId object ', () => {
    expect(sortByAlbum(photos)).toEqual(expected);
  });
});
