import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import MakeOrder from './components/User/MakeOrder/MakeOrder';
import UserServiceList from './components/User/UserServiceList/UserServiceList';
import Review from './components/User/Review/Review';
import AllServices from './components/Admin/AllServices/AllServices';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
              <Login />
          </Route>

          <PrivetRoute path="/makeorder">
              <MakeOrder />
          </PrivetRoute>

          <PrivetRoute path="/userServiceList">
              <UserServiceList />
          </PrivetRoute>

          <PrivetRoute path="/review">
              <Review />
          </PrivetRoute>

          <PrivetRoute path="/allservices">
              <AllServices />
          </PrivetRoute>

          <PrivetRoute path="/addservice">
              <AddService />
          </PrivetRoute>

          <PrivetRoute path="/makeadmin">
              <MakeAdmin />
          </PrivetRoute>

          <PrivetRoute path="/order/:id">
            <MakeOrder></MakeOrder>
          </PrivetRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
