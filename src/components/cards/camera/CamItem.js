import React from "react";
import { Link } from "react-router-dom";

const CameraItems = (props) => {
    const {name, to, codec} = props;

    return(
        <div className="col-xl-4 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <Link to ={to}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs text-primary text-uppercase mb-1">
                                    {name}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {codec}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CameraItems;