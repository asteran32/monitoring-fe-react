import React, { useEffect, useState } from "react";
import dataService from "../../../service/data.service";
import OpcuaClient from "./OpcuaDataStream";

const ServerDetail = ({ match, history}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [server, setServer] = useState();

    const deleteData = () => {
        const result = window.confirm( "Are you sure you want to delete this?")
        if (result){
            dataService.delCurrentServer(server.name).then(
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
        dataService.getCurrentServer(match.params.id).then((response) => {
            setServer(response.data);
            setIsLoading(false);
        })
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
                    <h4 className="mb-0 text-gray-800">OPC UA Server<span> / </span>{server.name}</h4>
                    <button className="btn btn-outline-danger" onClick={deleteData}>Delete</button>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <OpcuaClient
                        name={server.name}
                        endpoint={server.endpoint}
                        policy={server.policy}
                        mode={server.mode}
                        key={server.key}
                        nodeid={server.nodeid}
                        />
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default ServerDetail;