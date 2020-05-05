import React from 'react';
import { shallow } from 'enzyme';
import Header from '..';
import { findByAttr } from '../../../utils/tests';

const setup = () => shallow(<Header />);

describe('Header Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup();
    });

    it('Should render without error', () => {
        const header = findByAttr(wrapper, 'Header');
        const logocomponent = findByAttr(wrapper, 'LogoComponent');
        const navcomponent = findByAttr(wrapper, 'NavComponent');

        expect(header.length).toBe(1);
        expect(logocomponent.length).toBe(1);
        expect(navcomponent.length).toBe(1);
    });
});