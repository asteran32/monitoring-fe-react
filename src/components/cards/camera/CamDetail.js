import React, { useState, useEffect } from "react";
import dataService from "../../../service/data.service";
import WebRTCStream from "./WebSteam";

const CamDetail = ({match, history}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [camera, setCamera] = useState();

    const deleteData = () => {
        const result = window.confirm( "Are you sure you want to delete this?")
        if (result){
            dataService.delCurrentCam(camera.name).then(
                () => {
                    alert("Successfully delete the data");
                    history.goBack();
                },
                (error) => {
                    alert("Failed delete the data");
                    history.goBack();
                })
        }
    };

    useEffect(() => {
        dataService.getCurrentCam(match.params.id).then((response) => {
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
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h4 className="mb-0 text-gray-800">Monitor<span> / </span>{camera.name}</h4>
                    <button className="btn btn-outline-danger" onClick={deleteData}>Delete</button>
                </div>
                <div className="row">
                    <WebRTCStream 
                    name={camera.name}
                    autoplay={true}
                    controls={true} />
                </div>
            </div>

        )}
        </>
    )
}

export default CamDetail;