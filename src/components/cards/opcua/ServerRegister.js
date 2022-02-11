import React, { useEffect, useState } from "react";
import dataService from "../../../service/data.service";

const ServerRegistration = ({history}) => {
  const initialValues = {name:"", endpoint:"", policy:"", mode:"", cert:"", key:"", nodeid:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({ ...formValues, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    if(!values.name){
      errors.name = "Server name is required!";
    }
    if(!values.endpoint){
      errors.endpoint = "Server endpoint is required!";
    }
    if(!values.policy){
      errors.policy = "Server policy is required!";
    }
    if(!values.mode){
      errors.mode = "Server mode is required!";
    }
    if(!values.key){
      errors.key = "Server key is required!";
    }
    if(!values.nodeid){
      errors.nodeid = "Server nodeid is required!";
    }
    return errors;
  };

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
      dataService.addNewServer(formValues).then(
        () => {
          alert("Success");
          history.goBack();
        },
        (error) => {
          setFormErrors({name: "Already existed!"});
        }
      )
    } else {
      setIsSubmit(false);
    }
  },[formErrors]);

  return(
      <div className="row justify-content-md-center mt-5">
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="mb-3">
                    <h2>New Server</h2>
                  </div>
                  <div class="mb-3">
                    <label className="form-label">Server Name</label>
                    <input type="text"
                    className="form-control"
                    name="name" id="name"
                    placeholder="Server Name"
                    autoComplete="off"
                    value={formValues.name}
                    onChange={handleChange} />
                    <p className="text-danger">{formErrors.name}</p>
                  </div>

                  <div class="mb-3">
                    <label className="form-label">Endpoint</label>
                    <input type="text"
                    className="form-control"
                    name="endpoint" id="endpoint"
                    placeholder="opc.tcp://"
                    autoComplete="off"
                    value={formValues.endpoint}
                    onChange={handleChange} />
                    <p className="text-danger">{formErrors.endpoint}</p>
                  </div>
  
                  <div className="mb-3">
                    <label>Security Policy</label>
                    <select class="form-select" aria-label="Default select example"
                    name="policy"
                    value={formValues.policy}
                    onChange={handleChange}>
                      <option value="">Select Policy</option>
                      <option value="None">No Security</option>
                      <option value="Basic256Sha256_Sign">Basic sha256 sign</option>
                      <option value="Basic256Sha256_SignAndEncrypt">Basic sha256 sign and encrypt</option>
                    </select>
                    <p className="text-danger">{formErrors.policy}</p>
                  </div>

                  <div className="mb-3">
                    <label>Security Mode</label>
                    <select class="form-select" aria-label="Default select example"
                    name="mode"
                    value={formValues.mode}
                    onChange={handleChange}>
                      <option value="">Select Mode</option>
                      <option value="None">No Security</option>
                      <option value="Basic256Sha256_Sign">Basic sha256 sign</option>
                      <option value="Basic256Sha256_SignAndEncrypt">Basic sha256 sign and encrypt</option>
                    </select>
                    <p className="text-danger">{formErrors.mode}</p>
                  </div>

                  <div className="mb-3">
                    <label>Security Key</label>
                    <select class="form-select" aria-label="Default select example"
                    name="key"
                    value={formValues.key}
                    onChange={handleChange}>
                      <option value="">Select Security key</option>
                      <option value="None">No Security</option>
                      <option value="Basic256Sha256_Sign">Basic sha256 sign</option>
                      <option value="Basic256Sha256_SignAndEncrypt">Basic sha256 sign and encrypt</option>
                    </select>
                    <p className="text-danger">{formErrors.key}</p>
                  </div>
  
                  <div class="mb-3">
                    <label className="form-label">Node ID</label>
                    <input type="text"
                    className="form-control"
                    name="rtsp" id="rtsp"
                    placeholder="ns=2;i=1006, ns=2;i=1007 ..."
                    autoComplete="off"
                    onChange={handleChange} />
                    <p className="text-danger">{formErrors.nodeid}</p>
                  </div>
  
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary float-right">Add Camera</button>
                  </div>
                </div>
              </form>
              </div> 
            </div>
          </div>
        </div>
      </div>
  );
};

export default ServerRegistration;