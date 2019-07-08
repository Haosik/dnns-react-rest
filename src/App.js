import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ALBUM_ROUTE } from './constants/routes';
import FrontPage from './pages/frontPage';
import AlbumPage from './pages/albumPage';
import FourOhFour from './pages/fourOhFour';
import { Header } from './components';
import { getPhotosFromApi, sortByAlbum } from './services/photosService';
import GlobalStyle from './styles/globalStyle';

class App extends PureComponent {
  state = {
    photos: [],
    photosByAlbum: {}
  };

  handleFilterByAlbum = id => {
    return this.state.photos.filter(photo => String(photo.albumId) === String(id));
  };

  async componentDidMount() {
    this.setState({ photos: await getPhotosFromApi() }, () => {
      this.setState({ photosByAlbum: sortByAlbum(this.state.photos) });
    });
  }

  render() {
    const { photos, photosByAlbum } = this.state;
    return (
      <Router>
        {GlobalStyle}
        <Header />
        <Switch>
          <Route exact path="/" component={props => <FrontPage {...props} photosByAlbum={photosByAlbum} />} />
          <Route
            path={`${ALBUM_ROUTE}:albumId`}
            component={props => {
              return <AlbumPage {...props} photos={photos} onFilterByAlbum={this.handleFilterByAlbum} />;
            }}
          />
          <Route component={FourOhFour} />
        </Switch>
      </Router>
    );
  }
}

export default App;
