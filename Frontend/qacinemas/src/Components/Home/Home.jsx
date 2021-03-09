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
      <p className="text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula dui, pretium eu nibh dapibus, lobortis suscipit libero. Curabitur convallis, urna dignissim dapibus laoreet, augue lectus convallis turpis, at egestas orci eros ac nisi. Phasellus justo diam, efficitur id pulvinar accumsan, tristique eu elit. Vestibulum consectetur consequat velit tincidunt hendrerit. Sed viverra tempor tellus quis pellentesque. Etiam dictum ullamcorper lacus, et dictum mauris. Duis sit amet elit laoreet, luctus urna et, suscipit lectus. Maecenas vitae imperdiet dolor. Donec eu maximus arcu. Fusce sit amet sapien sed diam ultricies semper. Nam id quam pharetra, mattis dui sed, accumsan erat. Nulla aliquet sodales neque eu ultricies.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique placerat tellus eget ullamcorper. Nulla est augue, consequat in tristique vitae, feugiat vulputate ligula. Vivamus ut imperdiet ligula. Donec ac bibendum tellus. Aliquam rutrum convallis cursus. Integer iaculis purus vitae ligula accumsan, ac efficitur orci efficitur. Ut eleifend venenatis accumsan. Maecenas finibus id nibh ut ornare. Nullam aliquet feugiat posuere. Sed quis sollicitudin lorem. Fusce maximus bibendum lorem, in blandit mi vulputate a. Cras maximus lorem eget aliquet iaculis. In euismod arcu odio, et facilisis nibh gravida vel. Nunc tincidunt vitae nibh vel dignissim. Aliquam erat volutpat.

Morbi finibus ac lectus sed venenatis. Praesent tempus metus et dapibus dictum. Quisque elementum odio augue, id finibus odio elementum a. Maecenas dapibus nec odio et sodales. Etiam at massa ut neque feugiat porta. Aliquam egestas lobortis commodo. Sed eget nunc in arcu iaculis bibendum quis mattis odio. Cras bibendum eros et scelerisque egestas. Aliquam erat volutpat. Maecenas molestie sagittis ipsum, eget gravida odio facilisis quis.

Donec rhoncus eleifend quam nec ultrices. Integer augue nisi, aliquam id justo ut, sollicitudin rhoncus nulla. Duis sapien diam, dictum nec ultricies id, tempus ut ante. Duis tempus scelerisque metus at ultrices. Nam eget scelerisque libero, vitae imperdiet arcu. Sed dictum diam ac dolor eleifend, at pretium massa lacinia. Cras non laoreet diam. Aliquam maximus blandit nibh. Sed egestas sed dolor at aliquam. Morbi auctor imperdiet enim ac aliquam. Donec nisi sapien, vestibulum id lorem ac, auctor rhoncus eros.

Vestibulum vestibulum, metus ut blandit vehicula, libero dolor finibus justo, in fermentum dolor sapien ac tellus. Proin convallis sapien tempor velit auctor ultrices. Nulla et consectetur nibh, non ornare urna. Nulla facilisi. Vestibulum ut porta orci. Suspendisse quis finibus tellus. Sed volutpat, libero eu vestibulum dignissim, dui risus viverra augue, nec ultricies nisl elit ut lectus. Praesent massa lectus, rhoncus sed feugiat et, ultricies eget felis. Pellentesque dapibus augue et leo ornare, a tempor orci mollis. Integer vel diam quis leo aliquet malesuada. Vestibulum ut erat velit. Donec rhoncus lorem tristique ipsum finibus, vitae ornare lacus porttitor. Aliquam tincidunt felis sodales dui consequat, quis iaculis tellus porta. Fusce porta maximus pulvinar.</p>
    </>
  );
}
export default Home