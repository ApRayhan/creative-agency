import React, { useContext } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Topbar from '../Shared/Topbar/Topbar';
import { useForm, useFormContext } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../App';

const Review = () => {
  document.title = 'Review';
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const {register, handleSubmit, errors} = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    const userImage = loggedInUser.userImage;
    const allData = {...data, img: userImage};
    fetch('https://hidden-shore-67554.herokuapp.com/userReview', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(allData)
    })
    alert("Data SuccessFully Added .")
    history.push(`/`);
  }


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
            <div className="row">
              <div className="col-md-6">
                <form action="" onSubmit={ handleSubmit(onSubmit) }>
                  <fieldset disabled>
                  <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your name" name="name" value={loggedInUser.userName} ref={ register({required: true, minLength: 2}) }/>

                    {errors.name && <p style={{ color: 'red', marginLeft: '5px' }}>Description Is Invalid</p>}
                  </div>
                  </fieldset>
                  <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Company’s name, Designation" name="designation" ref={ register({required: true, minLength: 2}) }/>

                    {errors.designation && <p style={{ color: 'red', marginLeft: '5px' }}>Description Is Invalid</p>}
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" name="description" ref={ register({required: true, minLength: 10}) }></textarea>

                    {errors.description && <p style={{ color: 'red', marginLeft: '5px' }}>Description Is Invalid</p>}
                  </div>
                  <button type="submit" className="black_btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;