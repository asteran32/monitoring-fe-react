import axios from "axios";

const getCurrentServer = (id) => {
    return axios.get(`/server/client/${id}`);
};

const getAllServerList = () => { 
    return axios.get("/server/client")
};

const addNewServer = (props) => {
    return axios.post("/server/client", props);
};

const delCurrentServer = (id) => {
    return axios.delete(`/server/client/${id}`);
};

const getAllCams = () => {
    return axios.get("/monitor/cams");
};

const getCurrentCam = (id) => {
    return axios.get(`/monitor/cams/${id}`);
};

const addNewCam = (name, codec, rtsp) => {
    return axios.post("/monitor/cams", { name, codec, rtsp });
};

const delCurrentCam = (id) => {
    return axios.delete(`/monitor/cams/${id}`);
};

export default {
    getCurrentServer,
    getAllServerList,
    delCurrentServer,
    addNewServer,
    getAllCams,
    getCurrentCam,
    addNewCam,
    delCurrentCam,
};