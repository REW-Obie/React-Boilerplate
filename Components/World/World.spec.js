import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import CSSModules from 'react-css-modules';
import styles from './World.css';
import World from './World';

describe('<World />', () => {
    it('should render World component', () => {
        const wrapper = shallow(<World>Hello</World>);
        assert.ok(wrapper.is('h1'), 'should be a <h1>');
        assert.ok(wrapper.is('.test'), 'should have .test class');
        assert.equal(wrapper.text(), 'World', 'should say World');
    });

    it('renders className', () => {
        const wrapper = shallow(<World className="test" />);
        assert.ok(wrapper.is('.test'), 'should contain className');
    });
});