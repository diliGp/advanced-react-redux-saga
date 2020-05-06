import React, { lazy, Suspense, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from './Components/Loader';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { connect } from 'react-redux';
import { galleryActionCreators } from './store/Gallery/actionCreator';
import './Common.scss';

const Home = lazy(() => import('./Components/Home'));
const Gallery = lazy(() => import('./Containers/Gallery'));
const Counter = lazy(() => import('./Components/Counter'));
const PureComponents = lazy(() => import('./Components/PureComponents'));
const Comments = lazy(() => import('./Containers/Comments'));

class Router extends Component {
  render() {
    return (
      <div className="Router theme-light" data-test="Router">
        <Header />
        <main>
          <div className="container">
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route data-test="CommentsRoute" path="/comments" render={props => <Comments {...props} />} />
                <Route data-test="PureComponentsRoute" path="/pure-components" render={props => <PureComponents {...props} />} />
                <Route data-test="CounterRoute" path="/counters" render={props => <Counter {...props} />} />
                <Route data-test="GalleryRoute" path="/gallery" render={props => <Gallery {...props} />} />
                <Route data-test="HomeRoute" path="/" render={props => <Home {...props} />} />
              </Switch>
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.props.getGallery();
  }
}

const mapActionsToProps = {
  getGallery: galleryActionCreators.getImages.request
};

export default connect(undefined, mapActionsToProps)(Router);
