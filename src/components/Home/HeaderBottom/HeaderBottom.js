import React from 'react';
import Frame from '../../../images/logos/Frame.png'

const HeaderBottom = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 mt-3">
          <h3>
            Let’s Grow Your <br/>
            Brand To The <br/>
            Next Level 
          </h3>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
          </small>
          <div className="mt-5">
            <a className="black_btn" href="">Hire us</a>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={ Frame } alt=""/>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;