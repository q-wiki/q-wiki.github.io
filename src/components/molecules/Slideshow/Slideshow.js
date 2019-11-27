import React, { Component } from 'react'
import Tabs from 'react-responsive-tabs';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './slideshow.scss';

//This is an example how to use the slideshow component

const slideImages = [
  '../../../../src/assets/images/slide-1.jpg',
  '../../../../src/assets/images/slide-1.jpg',
  '../../../../src/assets/images/slide-1.jpg'
];

const Slideshow = () => {
    return (
      <Carousel infiniteLoop={true} autoPlay={true} transitionTime={500} interval={5000} showThumbs={false} showStatus={false}>
                <div>
                    <img src={slideImages[0]} />
                </div>
                <div>
                    <img src={slideImages[1]} />
                </div>
                <div>
                    <img src={slideImages[2]} />
                </div>
            </Carousel>
    )
}


export default Slideshow;
