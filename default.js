//import react core
import React from 'react';
import ReactDOM from 'react-dom';

//import individual Components
//import ComponentName/ from './PATH/TO/Component.jsx';
import Hello from './Components/Hello/Hello.jsx';
import World from './Components/World/World.jsx';

//Define constants for each Component
//const variableName = document.querySelector('#dom-node');
const hello = document.querySelector('#hello');
const world = document.querySelector('#world');

//Render each Component to the DOM
//ReactDOM.render(<Component/>, dom-node);
ReactDOM.render(<Hello />, hello);
ReactDOM.render(<World />, world);
