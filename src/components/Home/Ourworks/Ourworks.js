import React from 'react';
import './Ourworks.css';
import Carousel from 'react-elastic-carousel';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-2.png';

const Ourworks = () => {
  const breakpoints = [
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 992, itemsToShow: 3},
  ]
  return (
    <div className="our-works d-flex justify-content-center">
      <div className="container">
        <div className="text-center mt-5">
          <h3>Here are some of our <span style={{ color: '#7AB259' }}>works</span></h3>
        </div>
        <div className="all-works">
          <Carousel enableAutoPlay={ true } breakPoints={ breakpoints } showArrows={ false }>
            <div className="our-work mr-3">
              <img src={ carousel1 } alt=""/>
            </div>
            <div className="our-work mr-3">
              <img src={ carousel2 } alt=""/>
            </div>
            <div className="our-work mr-3">
              <img src={ carousel3 } alt=""/>
            </div>
            <div className="our-work mr-3">
              <img src={ carousel3 } alt=""/>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Ourworks;