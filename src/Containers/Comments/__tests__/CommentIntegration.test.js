import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import moxios from 'moxios';
import { findByAttr, mockStore, recordSaga } from '../../../utils/tests';
import Comments from '..';
import API from '../../../Services/API';
import Axios from 'axios';
import { fetchComments } from '../../../store/Comments/saga';
import commentActionTypes from '../../../store/Comments/actionTypes';

const setup = (store) => mount(
    <Provider store={store}>
        <Comments />
    </Provider>
);

const initialState = {
    comments: {
        processing: false,
        commentsList: [],
        error: ''
    }
};

describe('Comment Integration Test', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({
            ...initialState
        });

        wrapper = setup(store);

        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Should render without errors', () => {
        const commentsWrapper = findByAttr(wrapper, 'CommentsWrapper');
        const addCommentContainer = findByAttr(wrapper, 'AddCommentContainer');
        const commentsListContainer = findByAttr(wrapper, 'CommentsListContainer');

        expect(commentsWrapper.length).toBe(1);
        expect(addCommentContainer.length).toBe(1);
        expect(commentsListContainer.length).toBe(1);
    });

    test('Should fetch & list comments', async () => {
        const commentsListContainer = findByAttr(wrapper, 'CommentsListContainer');
        expect(commentsListContainer.length).toBe(1);

        const fetchCommentsBtn = findByAttr(commentsListContainer, 'FetchComments');
        expect(fetchCommentsBtn.length).toBe(1);

        const expectedData = [{
            id: 1,
            body: 'Comment 1'
        }, {
            id: 2,
            body: 'Comment 2'
        }];

        const mockFetchComments = jest.spyOn(
            API.comments,
            'getList'
        ).mockImplementation(() => Promise.resolve({
            status: 200,
            data: expectedData
        }));

        fetchCommentsBtn.simulate('click');

        moxios.withMock(() => {
            Axios.get('https://jsonplaceholder.typicode.com/comments').then(mockFetchComments);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                return request.respondWith({
                    status: 200,
                    data: expectedData
                });
            });
        });

        /**
         * Dispatched success action with data from saga.
         */
        const { dispatched } = await recordSaga(fetchComments);
        
        expect(dispatched).toContainEqual({
            type: commentActionTypes.getComments.success,
            payload: expectedData
        });

        expect(mockFetchComments).toBeCalledTimes(1);
    });
});