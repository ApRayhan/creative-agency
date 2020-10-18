import React, { useContext, useEffect } from 'react';
import Sidebar from '../../Admin/Shared/Sidebar/Sidebar';
import Topbar from '../../Admin/Shared/Topbar/Topbar';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';
import { userContext } from '../../../App';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MakeAdmin = () => {
  document.title = 'Make Admin';
  
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

  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    fetch('https://hidden-shore-67554.herokuapp.com/makeAdmin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    alert("Data SuccessFully Added .")
    document.getElementById('email').value = '';
  }
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
            <div className="make-admin">
              <h6>Email</h6>
              <form class="form-inline" onSubmit={ handleSubmit(onSubmit) }>
                <input id="email" name="email" type="text" class="form-control mb-2 mr-sm-2" placeholder="jon@gamil.com" ref={ register({required: true, minLength: 10}) }/>
                
                
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                <br />
                {errors.email && <p style={{ color: 'red', marginLeft: '5px' }}>Enter A Valid Email</p>}
              </form>
            </div>
          </div>
        </div>
      </div> : <h4>This Page Is Accessible Only For Admins<Link to="/">Back To Home</Link></h4>}
    </div>
  );
};

export default MakeAdmin;