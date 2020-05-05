import React from 'react';
import {shallow} from 'enzyme';
import Counter from '.';
import { findByAttr } from '../../utils/tests';

const setup = () => shallow(<Counter />);

describe('Counter Components', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    test('Should render without errors', () => {
        const hocSection = findByAttr(wrapper, 'HOCSection');
        const renderPropSection = findByAttr(wrapper, 'RenderPropSection');
        expect(hocSection.length).toBe(1);
        expect(renderPropSection.length).toBe(1);
    });
    
});