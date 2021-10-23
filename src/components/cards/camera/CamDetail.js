import React, { useState, useEffect } from "react";

import DataService from "../../../service/data.service";
import WebRTCStream from "./WebSteam";

const CamDetail = ({match, history}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [camera, setCamera] = useState();

    useEffect(() => {
        DataService.getCurrentCam(match.params.id).then((response) => {
            setCamera(response.data);
            setIsLoading(false);
        });
    }, [])
    return(
        <>
        {isLoading? (
            <div className="row justify-content-center">
                <div className="spinner-border text-primary"></div>
            </div>
        ):(
            <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h3 className="h3 mb-0 text-gray-800">Monitor / <span>{camera.name}</span></h3>
                <button className="btn btn-success btn-block" onClick={() => history.goBack()}>Show List</button>
            </div>
            <div className="row">
                <WebRTCStream 
                name={camera.name}
                autoplay={true}
                controls={true} />
            </div>
            </>

        )}
        </>
    )
}

export default CamDetail;