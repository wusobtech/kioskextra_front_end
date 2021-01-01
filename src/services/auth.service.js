import axios from "axios";

const API_URL = "http://kioskxtra-backend.wusobtech.com/api/v1/";

const register = (name, email, password) => {
    return axios.post(API_URL + "reegister", {
        name,
        email,
        password
    });
};

const login = (email, password) => {
    return axios
      .post(API_URL + "login", {
          email,
          password
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
  
  export default {
    register,
    login,
    logout,
  };