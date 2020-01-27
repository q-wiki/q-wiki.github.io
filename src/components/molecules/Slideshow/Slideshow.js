import React, { Component } from 'react'
import Tabs from 'react-responsive-tabs';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './slideshow.scss';

import { screenshots } from '../../../../src/constants/constants'

//This is an example how to use the slideshow component

const Slideshow = () => {
    return (
      <Carousel infiniteLoop={true} autoPlay={true} transitionTime={500} interval={5000} showThumbs={false} showStatus={false}>
                <div>
                    <img  src={screenshots[0].src} />
                </div>
                <div>
                    <img  src={screenshots[1].src} />
                </div>
            </Carousel>
    )
}

export default Slideshow;
