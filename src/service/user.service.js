import axios from "axios";

const API_URL = "http://localhost:5000" //proxy

const register = (username, email, password) => {
    return axios.post(API_URL + "/user/signup", {
      username,
      email,
      password,
    });
  };
  
  const login = (username, password) => {
    return axios
      .post(API_URL + "/user/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  export default {
    register,
    login,
    logout,
    getCurrentUser,
  };