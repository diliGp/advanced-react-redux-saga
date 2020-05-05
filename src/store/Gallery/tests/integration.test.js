import { galleryActionTypes } from "../actionTypes";
import moxios from 'moxios';
import Axios from "axios";
import API from "../../../Services/API";
import { getAllImages } from '../saga';
import { recordSaga } from "../../../utils/tests";

describe('Gallery Integration Test', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.install();
    });

    it('Should update store with mocked data', async () => {
        const expectedResponse = [{
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

        const expectedAction = {
            type: galleryActionTypes.getImages.success,
            payload: expectedResponse
        };

        
        const fetchGallery = jest.spyOn(API.gallery, 'getAll').mockImplementation(
            () => Promise.resolve({
                data: expectedResponse
            })
        );
        moxios.withMock(() => {
            Axios.get(/api.unsplash.com\/*/).then(fetchGallery);
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                return request.respondWith({
                    status: 200,
                    data: expectedResponse
                })
            });
        });

        const { dispatched } = await recordSaga(getAllImages);
        expect(fetchGallery).toBeCalledTimes(1);
        expect(dispatched).toContainEqual(expectedAction);
    });
});