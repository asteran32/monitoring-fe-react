import React, { useEffect, useRef } from 'react';

const socket_URL = 'ws://localhost:5000/opcua/stream';

const OpcuaClient  = (props) => {
    const { name, endpoint, policy, mode, key, nodeid } = props;
    const socket = useRef(null);

    useEffect(() => {
        socket.current = new WebSocket(socket_URL)
        let ws = socket.current

        ws.onopen = () => {
            console.log('opcua client socket is opened')
        };

        ws.onmessage = (e) => {
            let msg = JSON.parse(e.data)
            if(msg.event === 'opc'){
                let node = msg.data.nodeid
                let data = msg.data.value
                switch(node) {
                    default:
                        console.log(data)
                    //     case 'ns=2;i=1400':
                    //         console.log(msg.data.value)
                    //         break;
    
                    //     case 'ns=2;i=1409':
                    //         console.log(msg.data.value)
                    //         break;
    
                    //     default:
                    //         break;
                    // }
                }
            }
        };

        return () => {
            ws.close()
            console.log('websocket has closed')
        }
    }, [])

    return(
        <>
            <div className="row mb-3">
                <div className="col-xl-6 col-md-6 col-xs-12">
                    <div className="card shadow h-100">
                        <div className="card-body">
                            <div className="row">
                            <p> Name : {name}</p>
                            <p> Endpoint URL : {endpoint}</p>
                            <p> Security Key : {key}</p>
                            <p> Security Mode : {mode}</p>
                            <p> Security Policy : {policy}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6 col-xs-12">
                    <div className="card shadow h-100 ">
                        <div className="card-body">
                            <div className="row">
                                {nodeid && nodeid.map((id, i) => (
                                    <p key={i}> Node ID : {id}</p>
                                    // <p>{websocket data values or drawing graph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            {/* {opcua_nodes.map((item, index) => (
            <div className="col-xs-12 col-md-4 col-sm-2 mb-2" key={item.name}>
                <div className="card shadow h-100 py-2 opcua-wrapper">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col text-center">
                                <h6 className="text-xs text-uppercase text-primary mb-1">
                                {item.node}
                                </h6>
                                <div className="">
                                    <span className="h1 mb-0 text-gray-800">
                                    {item.value}
                                    </span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            ))} */}
        </>
    )
}

export default OpcuaClient;