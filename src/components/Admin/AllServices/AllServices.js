import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import Sidebar from '../../Admin/Shared/Sidebar/Sidebar';
import Topbar from '../../Admin/Shared/Topbar/Topbar';
import './AllServices.css'
import Service from './Service';

const AllServices = () => {
  document.title = 'All Services';

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    fetch('https://hidden-shore-67554.herokuapp.com/isAdmin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: loggedInUser.userEmail})
    })
    .then(res => res.json())
    .then(data => setAdmin(data))
  }, [])


  const [services, setServices] = useState([]);

  useEffect(() => {
    let unmounted = false;


    
      fetch('https://hidden-shore-67554.herokuapp.com/allService')
      .then(res => res.json())
      .then(data => {
        if (!unmounted) {
        setServices(data)
        }
      })

    return () => {
      unmounted = true;
    }
  }, [])

  return (
    <div className="bg_color">
      { isAdmin ? <div style={{ margin: '0px' }}className="row">
        <div style={{ padding: '0px' }} className="col-md-3 col-sm-12 col-12">
          <Sidebar />
        </div>
        <div style={{ padding: '0px' }} className="col-md-9  col-sm-12 col-12">
          <div className="topbar">
            <Topbar />
          </div>
          <div className="bottom-part mt-5 ml-5">
            <div className="container all-service-list">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    services.map(service => <Service service={service} />)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> : <h4>This Page Is Accessible Only For Admins<Link to="/">Back To Home</Link></h4>}
    </div>
  );
};

export default AllServices;