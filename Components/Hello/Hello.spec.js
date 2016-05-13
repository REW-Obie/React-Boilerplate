import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import CSSModules from 'react-css-modules';
import styles from './Hello.css';
import Hello from './Hello';

describe('<Hello />', () => {
    it('should render Hello component', () => {
        const wrapper = shallow(<Hello>Hello</Hello>);
        assert.ok(wrapper.is('h1'), 'should be a <h1>');
        assert.ok(wrapper.is('.test'), 'should have .test class');
        assert.equal(wrapper.text(), 'Hello ', 'should say Hello');
    });

    it('renders className', () => {
        const wrapper = shallow(<Hello className="test" />);
        assert.ok(wrapper.is('.test'), 'should contain className');
    });
});