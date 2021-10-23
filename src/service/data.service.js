import axios from "axios";

const getCurrentServer = (id) => {
    return axios.get(`/server/client/${id}`)
    //axios.get(API_URL + "user", { headers: authHeader() }); need to add auth
};

const getAllServerList = () => { 
    return axios.get("/server/client")
};

const addNewServer = (props) => {
    return axios.post("/server/client", {
        props
    }) // .then( if success -> back list else file alram)
};

const delCurrentServer = (name) => {
    return axios.delete("/server/client/:id", {
        name
    });
};

const getAllCams = () => {
    return axios.get("/monitor/cams")
};

const getCurrentCam = (id) => {
    return axios.get(`/monitor/cams/${id}`)
};

const addNewCam = (props) => {
    return axios.post("/monitor/cams")
};

const delCurrentCam = () => {
    return axios.defaults("/monitor/cams/:id")
}
export default {
    getCurrentServer,
    getAllServerList,
    addNewServer,
    delCurrentServer,
    getAllCams,
    getCurrentCam,
    addNewCam,
    delCurrentCam,
};