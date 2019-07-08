import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PhotoItem from './photoItem';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('PhotoItem', () => {
  const photo = {
    albumId: 99,
    id: 199,
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796'
  };

  it('should render <ReactModal>', () => {
    const wrapper = shallow(<PhotoItem photo={photo} />);
    expect(wrapper.find(ModalGateway).length).toEqual(1);
  });
  it('should not render <Modal> in default stance', () => {
    const wrapper = shallow(<PhotoItem photo={photo} />);
    expect(wrapper.find(Modal).length).toEqual(0);
  });
  it('should render <Modal> after item is clicked', () => {
    const wrapper = shallow(<PhotoItem photo={photo} />);
    wrapper.find('.albums-item').simulate('click');
    expect(wrapper.find(Modal).length).toEqual(1);
  });
});
