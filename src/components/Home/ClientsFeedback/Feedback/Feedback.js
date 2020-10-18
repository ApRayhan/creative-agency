import React from 'react';
import './Feedback.css';
import castomer from '../../../../images/customer-2.png'

const Feedback = ({ review }) => {
  return (
    <div className="feedback">
      <div className="feedback-top d-flex">
        <div className="mr-3">
          <img style={{ width: '50px',height: '50px', borderRadius: '50%' }} src={ review.img } alt=""/>
        </div>
        <div className="">
          <h6>{ review.name }</h6>
          <p>{ review.designation }</p>
        </div>
      </div>
      <div className="feedback-bottom">
        <small>
        { review.description } 
        </small>
      </div>
    </div>
  );
};

export default Feedback;