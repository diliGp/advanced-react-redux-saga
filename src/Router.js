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

class Router extends Component {
  render() {
    return (
      <div className="Router theme-light">
        <Header />
        <main>
          <div className="container">
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route path="/pure-components" render={props => <PureComponents {...props} />} />
                <Route path="/counters" render={props => <Counter {...props} />} />
                <Route path="/gallery" render={props => <Gallery {...props} />} />
                <Route path="/" render={props => <Home {...props} />} />
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
