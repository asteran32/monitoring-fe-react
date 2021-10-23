import React, { useEffect, useRef } from 'react';

const socket_URL = 'socket://localhost:5000/opcua/stream';

const OpcuaClient  = (props) => {
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
                // let node = msg.data.nodeid
                // switch (node) {
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
        };

        return () => {
            ws.close()
            console.log('websocket has closed')
        }
    }, [])

    return(
            <div className="row h-600-wrapper">
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
            </div>
    )
}

export default OpcuaClient;