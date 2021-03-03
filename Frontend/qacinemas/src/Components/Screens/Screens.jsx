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
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    
    return (
        <h1>Decor for Deluxe and Standard seats</h1>
    )
}
export default Screens;