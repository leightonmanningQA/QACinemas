import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    {
      id: 1,
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      id: 2,
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      id: 3,
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ];

const Screens = (props) => { 
    return (
        <h1>Decor for Deluxe and Standard seats</h1>
    )
}
export default Screens;