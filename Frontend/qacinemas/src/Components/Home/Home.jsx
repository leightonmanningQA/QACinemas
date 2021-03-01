import { Container, Row, Col } from 'reactstrap';
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
    src: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    altText: 'Slide 3',
    caption: 'Slide 3'
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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>

    );
  });

  return (
      <Container>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida tincidunt purus sed dignissim. Ut accumsan in nunc a blandit. Ut vehicula mauris gravida, maximus purus in, fringilla massa. Ut sit amet elit eros. Vivamus finibus, tellus at vehicula condimentum, est nunc auctor augue, commodo faucibus justo enim vitae orci. Nunc elementum, velit ut cursus vulputate, mi augue elementum ipsum, ac venenatis urna ante non justo. Fusce posuere laoreet felis, vitae feugiat neque condimentum et. Vivamus quis efficitur orci. Donec semper est vitae nibh facilisis varius. Pellentesque consectetur metus et egestas lacinia. Suspendisse sed sem consectetur, semper lorem id, suscipit neque. Cras turpis ligula, dictum quis lacus pellentesque, vestibulum pretium arcu. Duis dolor nunc, eleifend vel erat sed, rutrum hendrerit elit. Proin ut ornare metus. Pellentesque fringilla sapien vel dolor pharetra, et rutrum lacus pharetra.</p>
      </Container>
  );
}
export default Home