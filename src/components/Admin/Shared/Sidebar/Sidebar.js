import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';
import { FaPlus, FaShoppingBasket, FaUserPlus } from 'react-icons/fa';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div style={{ background: 'white', height: '100vh' }}>
      <div className="siteLogo">
        <Link to="/">
          <img className="logo mt-3 ml-5" src={ logo } alt=""/>
        </Link>
      </div> 
      <div className="list">
        <ul>
          <li><NavLink to="/allservices" exact activeClassName="active"><FaShoppingBasket /> <small className="ml-2">Service list</small></NavLink></li>

          <li><NavLink to="/addservice" exact activeClassName="active"><FaPlus /> <small className="ml-2">Add Service</small></NavLink></li>

          <li><NavLink to="/makeadmin" exact activeClassName="active"><FaUserPlus /> <small className="ml-2">Make Admin</small></NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;