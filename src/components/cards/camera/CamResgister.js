import React, { useEffect, useState } from "react";
import dataService from "../../../service/data.service";

const RegisterCamera = ({history}) => {
  const initialValues = {name: "", codec: "", rtsp: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Camera name is required!";
    }
    if (!values.codec) {
      errors.codec = "Camera codec is required!";
    }
    if (!values.rtsp) {
      errors.rtsp = "Camera rtsp url is required!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(()=> {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dataService.addNewCam(formValues.name, formValues.codec, formValues.rtsp).then(
        () => {
          alert("Success");
          history.goBack();
        },
        (error) => {
          setFormErrors({name: "Already existed!"})
        }
      )
    } else {
      setIsSubmit(false);
    }
  },[formErrors]);

  return (
    <div className="row justify-content-md-center mt-5">
      <div className="col-md-6 col-sm-12 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-3">
                  <h2>New Cam</h2>
                </div>
                <div className="mb-3">
                  <label for="cameraname" className="form-label">Camera Name</label>
                  <input type="text"
                  className="form-control"
                  name="name" id="name"
                  placeholder="Name"
                  autoComplete="off"
                  value={formValues.name}
                  onChange={handleChange} />
                  <p className="text-danger">{formErrors.name}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="cameracodec">Codec</label>
                  <select class="form-select"
                  aria-label="Default select example"
                  name="codec"
                  value={formValues.codec}
                  onChange={handleChange} >
                      <option value="">Select</option>
                      <option value="h264">H264</option>
                      <option value="vp8">VP8</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="rtspurl" className="form-label">RTSP URL</label>
                  <input type="text"
                  className="form-control"
                  name="rtsp" id="rtsp"
                  placeholder="rtsp://example.rtp"
                  autoComplete="off"
                  value={formValues.rtsp}
                  onChange={handleChange} />
                  <p className="text-danger">{formErrors.rtsp}</p>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary float-right">Add Camera</button>
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

export default RegisterCamera;