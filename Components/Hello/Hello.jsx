import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Hello.css';

class Hello extends React.Component {
        render() {
            return <h1 className='test' styleName='test'>Hello {this.props.name}</h1>;
        }
}

export default CSSModules(Hello, styles);
