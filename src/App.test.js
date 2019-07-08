import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow, configure } from 'enzyme';
import { PHOTOS_URL } from './constants/api';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('fetches data from server when server returns a successful response', done => {
    const mockSuccessResponse = [];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(PHOTOS_URL);

    process.nextTick(() => {
      expect(wrapper.state()).toEqual({
        photos: [],
        photosByAlbum: {}
      });

      global.fetch.mockClear();
      done();
    });
  });
});
