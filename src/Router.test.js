import React from 'react';
import Router from './Router';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { findByAttr } from './utils/tests';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const mockStore = configureStore([])

const setup = (store, route = ['/']) => mount(
  <Provider store={store}>
    <MemoryRouter initialEntries={[...route]}>
      <Router />
    </MemoryRouter>
  </Provider>
);

describe('Router Component', () => {
  let wrapper, store;
  beforeEach(() => {
    store = mockStore({});
    wrapper = setup(store);
  });

  afterEach(() => {
    /**
     * `mount` method actually mounts the component in JSDOM(Virtual Copy of Browser DOM) ,
     * so to make sure it doesn't conflict to other test, unmounting it here.
     */
    wrapper.unmount();
  });

  test('renders learn react link', () => {
    const container = findByAttr(wrapper, 'Router');
    expect(container.length).toBe(1);
  });

  describe('Routes based components rendring', () => {
    test('Should render pure components', () => {
      const wrapper = setup(store, ['/pure-components']);
      const pureComponentRoute = findByAttr(wrapper, 'PureComponentsRoute');
      expect(pureComponentRoute.length).toBe(1);
    });

    test('Should render couters component', () => {
      const wrapper = setup(store, ['/counters']);
      const counterRoute = findByAttr(wrapper, 'CounterRoute');
      expect(counterRoute.length).toBe(1);
    });

    test('Should render gallery component', () => {
      const store = mockStore({
        gallery: {
          images: []
        }
      });

      const wrapper = setup(store, ['/gallery']);
      const galleryRoute = findByAttr(wrapper, 'GalleryRoute');
      expect(galleryRoute.length).toBe(1);
    });

    test('Should render home component', () => {
      const wrapper = setup(store, ['/']);
      const homeRoute = findByAttr(wrapper, 'HomeRoute');
      expect(homeRoute.length).toBe(1);
    });
  });

});

