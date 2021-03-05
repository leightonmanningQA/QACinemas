import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

import "./Screens.css"

const items = [
    {
      id: 1,
      src:'http://photos.cinematreasures.org/production/photos/191157/1478638675/large.JPG?1478638675',
      altText: 'Slide 1',
      caption: 'Standard: Seating Area',
      description: 'Up to 200 seats within the standard seating area.'
    },
    {
      id: 2,
      src:'https://i.pinimg.com/originals/eb/37/99/eb3799a5bfac17ccf55372a66c020969.jpg',
      altText: 'Slide 2',
      caption: 'Standard: Concession/Lobby Area',
      description: 'Concession Stand and lobby area. Home to amazing snacks and a few arcade games'
    },
    {
      id: 3,
      src:'https://www.bonvivant.co.uk/journal/wp-content/uploads//2012/12/electric_shoreditch_interior1.jpg',
      altText: 'Slide 3',
      caption: 'Deluxe: Seating Area',
      description: 'Members only area. With no more than 50 seats wiithin our deluxe seating area.'
    },
    {
        id: 4,
        src:'https://storage.googleapis.com/rhinos/uploads/2019/07/6e88ddd1-directors-suite-1-e1562831043556-960x540.jpg',
        altText: 'Slide 4',
        caption: 'Deluxe: Box Suites',
        description: 'Enjoy fine dining and cocktails before or after a movie with friends/family or on your own.'

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
      <br></br>
      <Slider classNames={horizontalCss} autoplay={2000}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{ background: `url('${item.src}') no-repeat center center` }}
          >
            <div className="slides text-white inner" align="center">
              <h4>{item.caption}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </Slider>

    
    {/* <div>
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
    </div> */}
    </>
  );
}



export default Screens;