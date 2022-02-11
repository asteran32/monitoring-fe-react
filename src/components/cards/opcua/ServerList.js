import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ServerItem from "./ServerItem";
import DataService from "../../../service/data.service";

const ServerList = ({match}) => {
    const [datas, setDatas] = useState();

    useEffect(() => {
        DataService.getAllServerList().then((response) => {
            setDatas(response.data);
        });
    }, [])

    return(
        <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h4 className="mb-0 text-gray-800">OPC UA Server</h4>
                <Link to={`${match.url}/client/add`}>
                    <button className="btn btn-outline-secondary">Add Server</button>
                </Link>
            </div>
            <div className="row">
            {datas && datas.map((data, index) => (
                <ServerItem key={index}
                name={data.name}
                to={`${match.path}/${data.name}`}
                endpoint={data.endpoint} />
            ))}
            </div>
        </div>
    );

}
export default ServerList;
