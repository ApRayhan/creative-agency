import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service/Service';


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://hidden-shore-67554.herokuapp.com/allServiceList')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  // console.log(services);
  return (
    <main className="container" style={{ marginTop: '150px' }}>
      <div className="text-center">
        <h3 className="tt">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h3>
        <div className="row service">
          {
            services.map(service => <Service key={service._id} service={service} />)
          }
        </div>
        
      </div>
    </main>
  );
};

export default Services;