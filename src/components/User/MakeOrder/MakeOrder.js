import React, { useContext } from 'react';
import { BsCloudUpload } from "react-icons/bs";
import Sidebar from '../Shared/Sidebar/Sidebar';
import Topbar from '../Shared/Topbar/Topbar';
import { useForm, useFormContext } from "react-hook-form";
import './MakeOrder.css';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { userContext } from '../../../App';

const MakeOrder = () => {
  document.title = 'Create A Order';
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const {register, handleSubmit, errors} = useForm();
  const history = useHistory();
  const {id} = useParams();


  const [file, setFile] = useState(null);

  const handleImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
  }

  const onSubmit = (data) => {
    const status = "pending";
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', data.clientName);
    formData.append('email', data.clientEmail);
    formData.append('service', data.clientWork);
    formData.append('serviceDetails', data.projectDetails);
    formData.append('price', data.price);
    formData.append('status', status);

    fetch('https://hidden-shore-67554.herokuapp.com/makeorder', {
      method: 'POST',
      body: formData
    })
    alert("Data SuccessFully Added .")
    history.push(`/userServiceList`);
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
                <form className="make-new-order" onSubmit={ handleSubmit(onSubmit) }>
                  <div className="form-group">
                    <fieldset disabled>
                    <input value={loggedInUser.userName} type="text" className="form-control" id="formGroupExampleInput" placeholder="Your name / company’s name" name="clientName" ref={ register({required: true, minLength: 2}) }/>
                    </fieldset>

                    {errors.clientName && <p style={{ color: 'red', marginLeft: '5px' }}>Name Is Invalid</p>}
                  </div>
                  <div className="form-group">
                    <fieldset disabled>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your email address" name="clientEmail" value={ loggedInUser.userEmail } ref={ register({required: true, minLength: 10}) }/>
                    </fieldset>

                    {errors.clientEmail && <p style={{ color: 'red', marginLeft: '5px' }}>Email Is Invalid</p>}
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Graphic Design" defaultValue={ id } name="clientWork" ref={ register({required: true, minLength: 5}) }/>

                    {errors.clientWork && <p style={{ color: 'red', marginLeft: '2px' }}>Work Is Invalid</p>}
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Project Details (Min 10 Character)" name="projectDetails" ref={ register({required: true, minLength: 10}) }></textarea>

                    {errors.projectDetails && <p style={{ color: 'red', marginLeft: '5px' }}>Project Details Is Invalid</p>}
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="price" name="price" ref={ register({required: true, minLength: 1}) }/>

                        {errors.price && <p style={{ color: 'red', marginLeft: '5px' }}>Price Is Invalid</p>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input onChange={handleImage} id="file" type="file" accept="image/*"/>
                        <label htmlFor="file">
                          <BsCloudUpload />&nbsp; Chose A File
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="black_btn">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;