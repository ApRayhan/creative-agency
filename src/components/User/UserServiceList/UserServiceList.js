import React, { useEffect } from 'react';
import { userContext } from '../../../App';
import { useContext } from 'react';
import { useState } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Topbar from '../Shared/Topbar/Topbar';
import Service from './Service/Service';

const UserServiceList = () => {
  document.title = 'Order List';
  const [services, setServices] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  useEffect(() => {
    const email = loggedInUser.userEmail;
    const url = `https://hidden-shore-67554.herokuapp.com/service/${email}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setServices(data))
    
  }, [])


  return (
    <div className="bg_color">
      <div style={{ margin: '0px' }}className="row">
        <div style={{ padding: '0px' }} className="col-md-3 col-sm-12 col-12">
          <Sidebar />
        </div>
        <div style={{ padding: '0px' }} className="col-md-9  col-sm-12 col-12">
          <div className="topbar">
            <Topbar />
          </div>
          <div className="bottom-part mt-5 ml-5">
            <div className="container">
              <div className="row">
                {
                  services.map(service => <Service service={service} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserServiceList;