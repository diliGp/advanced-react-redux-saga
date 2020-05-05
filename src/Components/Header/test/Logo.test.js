import React from "react";
import Logo from "../Logo";
import { shallow } from 'enzyme';
import { findByAttr } from "../../../utils/tests";

describe('Logo Component', () => {
    it('Should render without error', () => {
        const wrapper = shallow(<Logo />);
        const container = findByAttr(wrapper, 'Logo');
        expect(container.length).toBe(1);
    });
})