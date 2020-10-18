import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';
import { FaShoppingCart, FaShoppingBasket, FaRegCommentAlt } from 'react-icons/fa';
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
          <li><NavLink to="/makeorder" exact activeClassName="active"><FaShoppingCart /> <small className="ml-2">Order</small></NavLink></li>

          <li><NavLink to="/userServiceList" exact activeClassName="active"><FaShoppingBasket /> <small className="ml-2">Service list</small></NavLink></li>

          <li><NavLink to="/review" exact activeClassName="active"><FaRegCommentAlt /> <small className="ml-2">Review</small></NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;