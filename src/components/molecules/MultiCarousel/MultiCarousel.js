import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from '../../atoms/Image/Image'
import './multiCarousel.scss';

//This is an example how to use the MultiCarousel component
const multiCarouselImages = [
  '../../../../src/assets/images/member-1.png',
  '../../../../src/assets/images/member-2.png',
  '../../../../src/assets/images/member-3.png',
  '../../../../src/assets/images/member-4.png',
  '../../../../src/assets/images/member-5.png',
  '../../../../src/assets/images/member-6.png',
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MultiCarousel = () => {
    return (
      <Carousel
    swipeable={false}
    draggable={true}
    showDots={true}
    centerMode={false}
    responsive={responsive}
    focusOnSelect={false}
    ssr={true} // means to render carousel on server-side.
    infinite={false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    deviceType="desktop"
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    <div>
      <Image backgroundSrc={multiCarouselImages[0]} width={300}/>
      <span>It's me Antonia</span>
    </div>
    <div><Image backgroundSrc={multiCarouselImages[1]} width={300}/></div>
    <div><Image backgroundSrc={multiCarouselImages[2]} width={300}/></div>
    <div><Image backgroundSrc={multiCarouselImages[3]} width={300}/></div>
    <div><Image backgroundSrc={multiCarouselImages[4]} width={300}/></div>
    <div><Image backgroundSrc={multiCarouselImages[5]} width={300}/></div>
    <div><Image backgroundSrc={multiCarouselImages[1]} width={300}/></div>
    <div><Image backgroundSrc={multiCarouselImages[2]} width={300}/></div>
  </Carousel>
    )
}


export default MultiCarousel;
