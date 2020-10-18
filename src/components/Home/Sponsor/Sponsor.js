import React from 'react';
import Slock from '../../../images/logos/slack.png';
import Google from '../../../images/logos/google.png';
import Uber from '../../../images/logos/uber.png';
import NetFlix from '../../../images/logos/netflix.png';
import Airbnb from '../../../images/logos/airbnb.png';
import './Sponsor.css'

const Sponsor = () => {
  return (
    <section className="container">
      <div className="row sponsor mt-5">
        <div className="offset-md-2 col-md-2 col-sm-4 col-6 mt-5">
          <img src={ Slock } alt=""/>
        </div>
        <div className="col-md-2 col-sm-4 col-6 mt-5">
          <img src={ Google } alt=""/>
        </div>
        <div className="col-md-2 col-sm-4 col-6 mt-5">
          <img src={ Uber } alt=""/>
        </div>
        <div className="col-md-2 col-sm-4 col-6 mt-5">
          <img src={ NetFlix } alt=""/>
        </div>
        <div className="col-md-2 col-sm-4 col-6 mt-5">
          <img src={ Airbnb } alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;