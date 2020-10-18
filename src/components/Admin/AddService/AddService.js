import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Admin/Shared/Sidebar/Sidebar';
import Topbar from '../../Admin/Shared/Topbar/Topbar';
import { useForm } from "react-hook-form";
import { BsCloudUpload } from "react-icons/bs";
import './AddService.css';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../../App';


const AddService = () => {
  document.title = 'Add Service';

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


  const history = useHistory();
  const {register, handleSubmit, errors} = useForm();

  const [file, setFile] = useState(null);

  const handleImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', data.title);
    formData.append('description', data.description);

    fetch('https://hidden-shore-67554.herokuapp.com/addService', {
      method: 'POST',
      body: formData
    })
    alert("Data SuccessFully Added .")
    history.push(`/`);
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
            <form action="" onSubmit={ handleSubmit(onSubmit) }>
            <div className="add-new-service">
              <div className="row">
                <div className="col-md-6">
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Service Title</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Title" name="title" ref={ register({required: true, minLength: 5}) }/>

                    {errors.title && <p style={{ color: 'red', marginLeft: '5px' }}>Title Is Invalid</p>}
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Description" name="description" ref={ register({required: true, minLength: 10}) }></textarea>

                    {errors.description && <p style={{ color: 'red', marginLeft: '5px' }}>Discription Is Invalid</p>}
                  </div>
                </div>
                <div className="col-md-3">
                  <h6>Icon</h6>
                  <div class="form-group up-img">
                    <input onChange={handleImage} id="file" type="file" placeholder="price" accept="image/*"/>
                    <label for="file">
                      <BsCloudUpload />&nbsp; Upload image
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" style={{ position: 'relative', top:' 25px' , background:' #009444'}}>Submit</button>
            </form>
          </div>
        </div>
      </div> : <h4>This Page Is Accessible Only For Admins<Link to="/">Back To Home</Link></h4>}
    </div>
  );
};

export default AddService;