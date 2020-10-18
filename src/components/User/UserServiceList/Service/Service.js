import React from 'react';
import service1 from '../../../../images/icons/service1.png'
import service2 from '../../../../images/icons/service2.png'
import './Service.css';

const Service = ({service}) => {
  return (
    <div className="col-md-6 col-sm-12 col-12 mt-2">
      <div className="user-service">
        <div className="d-flex service-top">
          <div className="">
            <img className="icon_class" src={ `data:image/jpeg;base64,${service.img.img}` } alt=""/>
          </div>
          <div className="status ml-auto mt-2">
            <a class={service.status} href="">{ service.status }</a>
          </div>
        </div>
        <div className="service-bottom">
          <h5>{ service.clientWork }</h5>
          <p>{ service.projectDetails }</p>
        </div>
      </div>
    </div>
  );
};

export default Service;