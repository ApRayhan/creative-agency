import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);


  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/"><img style={{ height: '47px',width: '150px' }} src={ logo } alt=""/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3 active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">Our Portfolio</a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link" href="#">Our Team</a>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" to="/makeadmin">Contact Us</Link>
            </li>
            <li className="nav-item">
              {
                loggedInUser.userEmail ? <h6 style={{ marginTop: '12px' }}>{ loggedInUser.userName }</h6> : 
                <Link style={{ padding: '7px 28px' }} className="nav-link black_btn" to="/login">Login</Link>
              }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;