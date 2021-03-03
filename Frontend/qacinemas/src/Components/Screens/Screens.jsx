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
      src:'http://photos.cinematreasures.org/production/photos/191157/1478638675/large.JPG?1478638675',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      id: 2,
      src:'https://lh3.googleusercontent.com/proxy/AfOt_P2E4ZDjFCt1b93575twLjnQ9Vl3z4Sj_-FJAl4-E7niotLi5mSReVevFr9Wq3oDJ5wnRkXGIT9Yv_nu8vi0MqHm6t4U7h0Q9AwUPmFYUE4teR4WuA53u96WCxNc2AW5tpZk1w',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      id: 3,
      src:'https://www.bonvivant.co.uk/journal/wp-content/uploads//2012/12/electric_shoreditch_interior1.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3'
    },
    {
        id: 4,
        src:'https://storage.googleapis.com/rhinos/uploads/2019/07/6e88ddd1-directors-suite-1-e1562831043556-960x540.jpg',
        altText: 'Slide 4',
        caption: 'Slide 4'

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

    const slides = items.map((item) => {
    return (
    <CarouselItem
    className="custom-tag"
    tag="div"
    key={item.src} 
    
    onExiting={() => setAnimating(true)}
    onExited={() => setAnimating(false)}>
          <img src={item.src} alt={item.altText} />
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
    );
  });

  return (
      <>      
    <h1 className="text-white" align="center">Standard and Deluxe Seating</h1>
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>
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
    </div>
    </>
  );
}



export default Screens;