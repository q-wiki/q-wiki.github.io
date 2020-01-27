import React, { Component } from 'react'
import Tabs from 'react-responsive-tabs';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './slideshow.scss';

//This is an example how to use the slideshow component

import slide1 from '../../../../src/assets/images/slide-1.jpg'

const Slideshow = () => {
    return (
      <Carousel infiniteLoop={true} autoPlay={true} transitionTime={500} interval={5000} showThumbs={false} showStatus={false}>
                <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide1} />
                </div>
                <div>
                    <img src={slide1} />
                </div>
            </Carousel>
    )
}

export default Slideshow;
