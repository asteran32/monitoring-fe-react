import React from "react";
import { Link } from "react-router-dom";
import CloudImg from "../../../asset/img/cloud.png";

const ServerItem = (props) => {
    const {name, endpoint, to} = props;
    
    return(
        <div className="col-xl-3 col-md-6 col-xs-12 mb-4">
            <div className="card shadow h-100">
                <Link exact to ={to} className="text-decoration-none">
                    <div className="text-center">
                        <img src={CloudImg} className="cam-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <div className="card-body">
                            <h5 className="card-title text-center text-uppercase">{name}</h5>
                            <p className="text-muted">{endpoint}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServerItem;