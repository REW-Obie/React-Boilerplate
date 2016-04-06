import React from 'react';
import styles from './Hello.css';

class Hello extends React.Component {
        render() {
            return <h1 className={styles.test}>Hello</h1>;
        }
}

export default Hello;
