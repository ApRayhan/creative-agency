import React, { useEffect } from 'react';
import './ClientsFeedback.css';
import Feedback from './Feedback/Feedback';
import Carousel from 'react-elastic-carousel';
import { useState } from 'react';

const ClientsFeedback = () => {
  const breakpoints = [
    {width: 500, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 992, itemsToShow: 3},
  ]
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://hidden-shore-67554.herokuapp.com/allReview')
    .then(res => res.json())
    .then(data => setReviews(data))
  }, []);

  return (
    <div className="all-feedback">
      <div className="container">
        <div style={{ paddingTop: '50px' }} className="">
          <h3 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h3>
        </div>
        <div className="feedbacks">
          <Carousel enableAutoPlay={ true } breakPoints={ breakpoints } showArrows={ false } pagination={ false }>
            {
              reviews.map(review => <Feedback review={review} key={review._id}/>)
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;