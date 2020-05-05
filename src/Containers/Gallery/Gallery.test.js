import React from 'react';
import Gallery from '.';
import { shallow } from 'enzyme';
import { findByAttr } from '../../utils/tests';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = mockStore({
    gallery: {
        images: []
    }
});

const setup = (store = initialState) => shallow(
    <Gallery store={store} />
).childAt(0).dive();

describe('Gallery Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    })

    test('Should render without error', () => {
        const container = findByAttr(wrapper, 'Gallery');
        expect(container.length).toBe(1);
    });

    test('Should render Image component', () => {
        const images = [{
            id: 1,
            alt_description: 'Test alt',
            urls: {
                full: 'http://dummyimage.com'
            }
        },
        {
            id: 2,
            alt_description: 'Test alt',
            urls: {
                full: 'http://dummyimage.com'
            }
        }];

        const store = mockStore({
            gallery: {
                images
            }
        });

        wrapper = setup(store);

        const imageComponent = findByAttr(wrapper, 'Image');
        expect(imageComponent.length).toBe(2);
    });
});

