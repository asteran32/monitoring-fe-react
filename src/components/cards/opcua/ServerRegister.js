import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServerRegistration = () => {
    const [serverConfig, setServerConfig] = useState({
        name:"",
        endpoint:"",
        policy:"",
        mode:"",
        cert:"",
        key:"",
        nodeid:[]
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setServerConfig({ ...serverConfig, [name]: value})
    };

    const handleSubmit = (e) => {

    };
    
    return(
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <div class="mb-3">
                      <label for="servername" className="form-label">Server Name</label>
                      <input type="text"
                      className="form-control"
                      name="name" id="name"
                      placeholder="name"
                      autoComplete="off"
                      value={serverConfig.name}
                      onChange={handleInput} />
                    </div>

                    <div class="mb-3">
                      <label for="servername" className="form-label">Endpoint</label>
                      <input type="text"
                      className="form-control"
                      name="endpoint" id="endpoint"
                      placeholder="opc.tcp://"
                      autoComplete="off"
                      value={serverConfig.endpoint}
                      onChange={handleInput} />
                    </div>
    
                    <div className="mb-3">
                      <label htmlFor="policy">Security Policy</label>
                      <select class="form-select" aria-label="Default select example" name="policy">
                          <option selected value="None">No Security</option>
                          <option value="Basic256Sha256_Sign">Basic sha256 sign</option>
                          <option value="Basic256Sha256_SignAndEncrypt">Basic sha256 sign and encrypt</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="policy">Security Mode</label>
                      <select class="form-select" aria-label="Default select example" name="mode">
                          <option selected value="None">No Security</option>
                          <option value="Basic256Sha256_Sign">Basic sha256 sign</option>
                          <option value="Basic256Sha256_SignAndEncrypt">Basic sha256 sign and encrypt</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="policy">Security Key</label>
                      <select class="form-select" aria-label="Default select example" name="key">
                          <option selected value="None">No Security</option>
                          <option value="Basic256Sha256_Sign">Basic sha256 sign</option>
                          <option value="Basic256Sha256_SignAndEncrypt">Basic sha256 sign and encrypt</option>
                      </select>
                    </div>
    
                    <div class="mb-3">
                      <label for="rtspurl" className="form-label">Node ID</label>
                      <input type="text"
                      className="form-control"
                      name="rtsp" id="rtsp"
                      placeholder="RTSP URL"
                      autoComplete="off"
                      value={serverConfig.nodeid}
                      onChange={handleInput} />
                    </div>
    
                    <div className="form-group">
                      <button type="submit" className="btn btn-success btn-block">Add Camera</button>
                      <Link to="/server">
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

export default ServerRegistration;