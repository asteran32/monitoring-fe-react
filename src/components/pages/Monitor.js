import React from "react";
import { Route } from "react-router";

import CamDetail from "../cards/camera/CamDetail";
import CameraList from "../cards/camera/CamList";
import RegisterCamera from "../cards/camera/CamResgister";

const Monitor = ({match}) => {
    return(
        <div className="container-fluid mt-4">
            <Route exact path={match.path} component={CameraList}/>
            <Route exact path={`${match.path}/cam/add`} component={RegisterCamera} />
            <Route exact path={`${match.path}/:id`} component={CamDetail} />

        </div>
    )
};

export default Monitor;
