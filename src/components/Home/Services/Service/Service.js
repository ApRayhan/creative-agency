import React from 'react';
import WebDesign from '../../../../images/icons/service3.png'
import GraphicDesign from '../../../../images/icons/service2.png'
import WebDevelop from '../../../../images/icons/service1.png'
import './Service.css'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  return (
    <Link to={`/order/${service.title}`} className="col-md-4 p-5 single-item">
      <img src={ `data:image/jpeg;base64,${service.img.img}` } alt=""/>
      <h5 className="mt-3">{ service.title }</h5>
      <p>{ service.description }</p>
    </Link>
  );
};

export default Service;