import axios from "axios";

const register = (firstname, lastname, email, password) => {
  return axios.post("/user/signup", {
    firstname,
    lastname,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post("/user/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response && response.data) {
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