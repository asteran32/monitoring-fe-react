import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RegisterCamera = () => {
    const [camRegistration, setCamRegistration] = useState({
        name: "",
        codec: "",
        rtsp: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;  
        const value = e.target.value;
        
        setCamRegistration({ ...camRegistration, [name]: value });
    };

    const handleSubmit = (e) => {
        
    };

    return (
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <div class="mb-3">
                      <label for="cameraname" className="form-label">Camera Name</label>
                      <input type="text"
                      className="form-control"
                      name="name" id="name"
                      placeholder="name"
                      autoComplete="off"
                      value={camRegistration.name}
                      onChange={handleInput} />
                    </div>
    
                    <div className="mb-3">
                      <label htmlFor="cameracodec">Codec</label>
                      <select class="form-select" aria-label="Default select example" name="codec">
                          <option selected value="h264">H264</option>
                          <option value="vp8">VP8</option>
                      </select>
                    </div>
    
                    <div class="mb-3">
                      <label for="rtspurl" className="form-label">RTSP URL</label>
                      <input type="text"
                      className="form-control"
                      name="rtsp" id="rtsp"
                      placeholder="RTSP URL"
                      autoComplete="off"
                      value={camRegistration.rtsp}
                      onChange={handleInput} />
                    </div>
    
                    <div className="form-group">
                      <button type="submit" className="btn btn-success btn-block">Add Camera</button>
                      <Link to="/monitor">
                      <button className="btn btn-danger btn-block">Back to List</button>
                      </Link>
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