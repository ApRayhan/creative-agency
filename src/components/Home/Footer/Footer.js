import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5">
            <h4>Let us handle your<br /> project, professionally.</h4>
            <small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small>
          </div>
          <div className="col-md-6 col-sm-12 mt-5">
            <form>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name / company’s name" />
              </div>
              <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="black_btn">Send</button>
            </form>
          </div>
          
        </div>
        <div className="copyright">
          <small>copyright Orange labs 2020</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;