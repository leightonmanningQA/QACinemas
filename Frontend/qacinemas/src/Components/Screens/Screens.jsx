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
      src:'https://www.bonvivant.co.uk/journal/wp-content/uploads//2012/12/electric_shoreditch_interior1.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      id: 2,
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz69-rTkFpA1DW3HE3XN7882Q0BezTjVpyFQ&usqp=CAU',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      id: 3,
      src:'https://images.unsplash.com/photo-1580809361436-42a7ec204889?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGx1eHVyeSUyMGNpbmVtYSUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      altText: 'Slide 3',
      caption: 'Slide 3'
    },
    {
        id: 4,
        src:'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpbmVtYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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