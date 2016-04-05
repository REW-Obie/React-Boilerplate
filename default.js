//import react core
import React from 'react';
import ReactDOM from 'react-dom';

//imoprt individual Components
import Hello from './Components/Hello/Hello.jsx';
import World from './Components/World/World.jsx';

//Define constants for each Component
const hello = document.querySelector('#hello');
const world = document.querySelector('#world');

//Render each Component to the DOM
ReactDOM.render(<Hello />, hello);
ReactDOM.render(<World />, world);
