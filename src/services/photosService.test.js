import { sortByAlbum, getPhotosFromApi } from './photosService';

describe('getPhotosFromApi', () => {
  it('should make api call and return data if api responded', async () => {
    expect(await getPhotosFromApi()).toMatchSnapshot();
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
  it('should return sorted by albumId object ', () => {
    expect(sortByAlbum(photos)).toEqual({
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
    });
  });
});
