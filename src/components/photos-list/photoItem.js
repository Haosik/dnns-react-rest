import React, { PureComponent } from 'react';
import Img from 'react-image';
import LazyLoad from 'react-lazyload';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { StyledItem } from '../../styles/listingStyles';
import { ReactComponent as DefaultImage } from '../../logo.svg';

class PhotoItem extends PureComponent {
  state = { modalIsOpen: false };

  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  render() {
    const { photo } = this.props;
    const { modalIsOpen } = this.state;
    return (
      <>
        <StyledItem className="albums-item" onClick={this.toggleModal}>
          <div>
            <h5>Album {photo.title}</h5>
            <span className="albums-item__box">
              <LazyLoad>
                <Img
                  src={[photo.thumbnailUrl, DefaultImage]}
                  alt="Photo album thumbnail"
                  crossorigin="anonymous"
                  className="albums-item__img"
                />
              </LazyLoad>
            </span>
          </div>
        </StyledItem>
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal} allowFullscreen={false} closeOnBackdropClick={true}>
              <Carousel views={[{ src: photo.url, caption: photo.title }]} hideControlsWhenIdle={false} />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

export default PhotoItem;
