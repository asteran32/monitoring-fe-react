import React from "react";
import { Link } from "react-router-dom";
import CamImg from "../../../asset/img/cam.png";

const CameraItems = (props) => {
    const {name, to, codec, rtsp} = props;

    return(
        <div className="col-xl-3 col-md-6 col-xs-12 mb-4">
            <div className="card shadow h-100">
                <Link to ={to} className="text-decoration-none">
                    <div className="text-center">
                        <img src={CamImg} className="cam-img" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center text-uppercase">{name}</h5>
                        <p className="card-text text-muted">code : {codec}</p>
                        <p className="card-text text-muted">{rtsp}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CameraItems;