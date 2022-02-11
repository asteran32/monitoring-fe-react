import React, {useEffect, useRef} from "react";

const WS_URL = "ws://localhost:5000/monitor/stream/"

const WebRTCStream = (props) => {
    const socket = useRef(null);
    const peerconection = useRef(null);

    useEffect(() => {
        socket.current = new WebSocket(WS_URL+props.name)
        peerconection.current = new RTCPeerConnection();

        let ws = socket.current;
        let pc = peerconection.current;

        pc.ontrack = (e) => {
            var el = document.createElement(e.track.kind)
            el.srcObject = e.streams[0]
            el.autoplay = props.autoplay
            el.controls = props.controls

            document.getElementById("remoteVideo").appendChild(el);
        };

        pc.addTransceiver('video', {'direction': 'recvonly'})

        // It turns out you need to add stream audio/video or dataChannel
        // to the connection to be able to get the candidate.
        pc.onicecandidate = (e) => {
            if(!e.candidate){
                return
            }
            ws.send(JSON.stringify({event: "candidate", data: JSON.stringify(e.candidate)}));
        };

        ws.onopen = () => {
            if(!pc){
                return console.log("Peerconnection returns null");
            }
            pc.createOffer().then(offer => {
                pc.setLocalDescription(offer);
                ws.send(JSON.stringify({event: "offer", data: JSON.stringify(offer)}));
            })
        };

        ws.onmessage = (e) => {
            let msg = JSON.parse(e.data)
            if (!msg) {
                return console.log('Failed to parse JSON')
            }
            
            switch (msg.event) {
                case 'answer':
                    let answer = JSON.parse(msg.data)
                    if (answer) {
                        pc.setRemoteDescription(answer);
                    }
                    break;
                    
                case 'candidate':
                    let candidate = JSON.parse(msg.data)
                    if (candidate) {
                        pc.addIceCandidate(candidate);
                    }
                    break;

                default:
                    break;
            }
        };

        ws.onerror = (e) => {
            return console.log('Error: %s', e.data)
        };

        return () => {
            ws.close()
            console.log('Websocket has closed')
        };
    }, [])

    return(
        <div id="remoteVideo" className="text-center">
        </div>

    )
};

export default WebRTCStream;