import React from 'react';
import { shallow } from 'enzyme';
import ClickCounterRender from './ClickCounterRender';
import { findByAttr } from '../../utils/tests';

const setup = props => shallow(<ClickCounterRender {...props} />);

describe('Click Counter Render', () => {

    let wrapper, 
    increment = jest.fn(),
    decrement = jest.fn();
    beforeEach(() => {
        const initialProps = {
            count: 0,
            increment,
            decrement
        }
        wrapper = setup(initialProps);
    });

    test('Should render without error', () => {
        const conatiner = findByAttr(wrapper, 'ClickCounterRenderConatiner');
        expect(conatiner.length).toBe(1);
    });

    test('Should render action buttons', () => {
        const IncrementBtn = findByAttr(wrapper, 'IncrementBtn');
        expect(IncrementBtn.length).toBe(1);
        const DecrementBtn = findByAttr(wrapper, 'DecrementBtn');
        expect(DecrementBtn.length).toBe(1);
    });
    
    test('Should invoke increment on click of increment button', () => {
        increment.mockClear();
        expect(increment).not.toBeCalled();
        const IncrementBtn = findByAttr(wrapper, 'IncrementBtn');
        IncrementBtn.simulate('click');
        IncrementBtn.simulate('click');
        IncrementBtn.simulate('click');
        expect(increment).toBeCalled();
        expect(increment).toBeCalledTimes(3);
    });
    
    test('Should invoke decrement on click of decrement button', () => {
        decrement.mockClear();
        expect(decrement).not.toBeCalled();
        const DecrementBtn = findByAttr(wrapper, 'DecrementBtn');
        DecrementBtn.simulate('click');
        DecrementBtn.simulate('click');
        expect(decrement).toBeCalled();
        expect(decrement).toBeCalledTimes(2);
    });
});