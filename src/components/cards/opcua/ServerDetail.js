import React, { useEffect, useState } from "react";
import DataService from "../../../service/data.service";
import OpcuaClient from "./OpcuaDataStream";

const ServerDetail = ({ match, history}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [server, setServer] = useState();

    useEffect(() => {
        DataService.getCurrentServer(match.params.id).then((response) => {
            setServer(response.data);
            setIsLoading(false);
            console.log(response.data)
        })
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
                <h3 className="h3 mb-0 text-gray-800">OPC UA Server / <span>{server.name}</span></h3>
                <button className="btn btn-success btn-block" onClick={() => history.goBack()}>Show List</button>
            </div>
            <div className="row">
                {/* <OpcuaClient /> */}
            </div>
            </>
        )}
        </>
    )
}

export default ServerDetail;