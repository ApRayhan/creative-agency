import React, { useContext } from 'react';
import { userContext } from '../../../App';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Ourworks from '../Ourworks/Ourworks';
import Services from '../Services/Services';
import Sponsor from '../Sponsor/Sponsor';


const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    <div>
    <h4>{ loggedInUser.userEmail }</h4>
      <Header />
      <Sponsor />
      <Services />
      <Ourworks />
      <ClientsFeedback />
      <Footer />
    </div>
  );
};

export default Home;