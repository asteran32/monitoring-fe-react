import React from "react";
// import Particle from "react-particles-js";
import ParticlesConfig from "../../asset/js/particlesConfig.json";

const Login = () => {
    return(
        <>
        {/* <Particle params={ParticlesConfig} className="particles__container" /> */}
        <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <form action="">
                                <div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input className="form-control" type="text"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-success btn-icon-split">Sign In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;
