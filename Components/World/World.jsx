import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './World.css';

class World extends React.Component {
        render() {
            return <h1 className='test' styleName='test'>World</h1>;
        }
}

export default CSSModules(World, styles);
