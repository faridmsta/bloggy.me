import React, { useState } from 'react';
import './Swiper.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';




function Swiper({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="imgWrap">
          <img src={item.src} alt={item.altText} />
        </div>

      </CarouselItem>
    );
  });

  return (
    <div className="carusel">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}

      >
        {slides}
        <div className="controls">
          <div className="text">
            <h2>{items[activeIndex].header}</h2>
            <p>{items[activeIndex].text}</p>
          </div>
          <div className="indicators">

            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
            <Link className='moreBtn' 
              to={items[activeIndex].link}
            >More</Link>
          </div>
        </div>
      </Carousel>

    </div>

  );
}

export default Swiper;