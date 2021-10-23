import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ServerItem from "./ServerItem";
import DataService from "../../../service/data.service";

const ServerList = ({match}) => {
    const [datas, setDatas] = useState();

    useEffect(() => {
        DataService.getAllServerList().then((response) => {
            console.log(response.data)
            setDatas(response.data);
        });
    }, [])

    return(
        <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Server</h1>
            <Link to={`${match.url}/opcua/add`}>
                <button className="btn btn-warning btn-icon-split">Add Server</button>
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
        </>
    );

}
export default ServerList;
