import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Hello.css';
// require('./Hello.css');

class Hello extends React.Component{
   render(){
     return <h1 className={styles.test}>Hello</h1>
   }
}

export default Hello;
