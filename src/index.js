import React from 'react';
import ReactDOM from 'react-dom'
import Slider from './components/Slider.js';


let images = [
    {src: require("./images/1.jpg")},
    {src: require("./images/2.jpg")},
    {src: require("./images/3.jpg")},
    {src: require("./images/4.jpg")}
];


ReactDOM.render(<Slider
    images={images}
    interval={2}
    speed={1}
    autoplay={true}
    pause={true}
    arrows={true}
    showFlag={true}

/>,document.querySelector("#app"));