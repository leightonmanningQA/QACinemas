import { Container} from 'reactstrap';
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
      <h4 className="text-white text-center">Welcome to QA cinemas, use the navigation bar across the top to get around the site. 
      Want to see what is currently showing? Head over to the Gallery page to see our listings and showing times. 
      Then go to the Ticket Booking page to book and even pay for tickets all through our website.
      Once booked why not use our handy Getting There page to find the best route to get here and have a look at our Places To Go page for exclusive discounts for nearby venues.
      If you are a film buff, then you will love our Search page and can leave reviews for your favourite films on our Discussion Board. We would like to hear your feedback and can find our Email on the Contact Us page.
       Lastly, we have information regarding opening times, film classifications and our screen layouts all on the relevant pages.</h4>
      <br></br>
      <br></br>
       <h3 className="text-white text-center">We hope you have a great time at QA Cinemas!</h3>
    </>
  );
}
export default Home