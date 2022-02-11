import React from 'react';
import StatusCard from '../cards/status/StatusCard';
import GltfCards from '../cards/model/Gltf';
import OpcuaClient from '../cards/opcua/OpcuaDataStream';

const Overview = () => {
    return(
        <div className="container-fluid mt-4">
            {/* head line */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h4 mb-0 text-gray-700">Overview</h1>
            </div>
            {/* main contents */}
            <StatusCard />
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <GltfCards />
                </div>
                <div className="col-md-6 col-sm-12">
                    {/* <OpcuaClient /> */}
                </div>
            </div>
        </div>
    )

};

export default Overview;