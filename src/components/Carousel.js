import React from 'react';



const pic1 = require('../images/pic1.jpg')
const pic2 = require('../images/pic2.jpg')
const pic3 = require('../images/pic3.jpg')


const Carousel = (props) => {


  return (
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={pic1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={pic2}  alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={pic3}  alt="Third slide"/>
    </div>
  </div>
</div>
);
  }

export {Carousel};