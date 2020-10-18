import React, { useContext } from 'react';
import { userContext } from '../../../../App';
import './Topbar.css'

const Topbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div className="top-nav">
      <div className="container">
        <nav className="navbar navbar-light justify-content-between">
          <a className="navbar-brand"><h5>{document.title}</h5></a>
          <a href="" className="ml-auto"><h6>{ loggedInUser.userName }</h6></a>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;