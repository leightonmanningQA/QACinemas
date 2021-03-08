import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import cinema1 from "../images/cinema1-medium.jpg"
import cinema2 from "../images/cinema2-medium.jpg"
import cinema3 from "../images/cinema3-medium.jpg"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: cinema1,
    altText: 'Slide 1',
    caption: 'Good Food'
  },
  {
    src: cinema2,
    altText: 'Slide 2',
    caption: 'Big Screens'
  },
  {
    src: cinema3,
    altText: 'Slide 3',
    caption: 'Comfy Seats'
  }
];


const Home = (props) => {
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

  const slides = items.map((item) => {
    return (

      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="750px" />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>

    );
  });

  return (
    <>
      <br />
      <Container>
        <h1 className="text-white text-center display-1">Welcome to QA Cinemas</h1>
      </Container>
      <br />
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <br />
    </>
  );
}
export default Home