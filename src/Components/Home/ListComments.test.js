import React from 'react';
import { shallow, render } from 'enzyme';
import ListComments from './ListComments';
import { findByAttr } from '../../utils/tests';

const setup = props => shallow(<ListComments {...props} />);

describe('List Comments', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it('Should not render if no props ar passed', () => {
        const container = findByAttr(wrapper, 'ListComments');
        expect(container.length).toBe(0);
    });

    it('Should render when list prop is passed', () => {
        const comments = [
            'Comment 1',
            'Comment 2',
        ];

        /**
         * using `text()` returns a string of rendered text of the current tree.
         * so if it is being used to test the actual html ouput, use `render` function
         * instead of `shallow`, which parses html pretty well using `cheerio` library.
         */
        wrapper = render(<ListComments comments={comments} />);
        const commentList = findByAttr(wrapper, 'CommentLi');
        expect(commentList.length).toBe(2);
        expect(commentList.text()).toContain('Comment 1');
        expect(commentList.text()).toContain('Comment 2');
    });
});