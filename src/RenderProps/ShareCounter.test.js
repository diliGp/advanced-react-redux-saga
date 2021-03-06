import React from 'react';
import { shallow } from 'enzyme';
import ShareCounter from './ShareCounter';
import { findByAttr } from '../utils/tests';
import ClickCounterRender from '../Components/Counter/ClickCounterRender';

const setup = props => shallow(<ShareCounter {...props} />);

describe('Share Counter Render Props', () => {
    let wrapper;
    beforeEach(() => {
        const initialProps = {
            render: props => <ClickCounterRender {...props} />
        };
        
        wrapper = setup(initialProps);
    });

    it('Should Render without error', () => {
        const container = findByAttr(wrapper, 'ShareCounterContainer');
        expect(container.length).toBe(1);
    });
});