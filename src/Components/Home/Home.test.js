import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';
import { findByAttr } from '../../utils/tests';

const setup = () => shallow(<Home />);

describe('Home Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it('Should render without error', () => {
        const container = findByAttr(wrapper, 'Home');
        expect(container.length).toBe(1);
    });

    it('Should change textarea content', () => {
        const textarea = findByAttr(wrapper, 'TextArea');
        expect(textarea.length).toBe(1);

        const expectedComment = 'New Comment Through Simulator';
        textarea.simulate('change', {
            target: {
                value: expectedComment
            }
        });

        /**
         * Updating component: Making component re-render to make sure the state has been
         * updated the value is updated.
         * 
         */
        wrapper.update();
        
        /**
         * Need to search again for textarea to get the updated one that's why not using the 
         * `textarea` variable.
         */
        expect(findByAttr(wrapper, 'TextArea').prop('value')).toBe(expectedComment);
        /**
         * Checking if state is updated properly too.
         */
        expect(wrapper.state('text')).toBe(expectedComment);
    });

    it('Should render the submit button', () => {
        const submitButton = findByAttr(wrapper, 'SubmitButton');
        expect(submitButton.length).toBe(1);
    });

    it('Should update the textarea as blank when the form is submitted', () => {
        const form = findByAttr(wrapper, 'SubmitForm');
        expect(form.length).toBe(1);

        /**
         * Input some value in text area.
         */
        findByAttr(wrapper, 'TextArea').simulate('change', {
            target: {
                value: 'New Comment'
            }
        });
        
        /**
         * Re-render.
         */
        wrapper.update();

        expect(findByAttr(wrapper, 'TextArea').prop('value')).toBe('New Comment');

        const preventDefault = jest.fn();
        form.simulate('submit', {
            preventDefault
        });

        /**
         * Re-rendering component after form is submited.
         */
        wrapper.update();

        expect(findByAttr(wrapper, 'TextArea').prop('value')).toBe('');
        expect(preventDefault).toBeCalledTimes(1);
        expect(wrapper.state('text')).toBe('');
        expect(wrapper.state('comments').length).toBe(1);
    });
});