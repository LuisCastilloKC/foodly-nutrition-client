import axios from "axios";

const API_URL = "http://localhost:3000/";

const register = (username, email, password) => {
  return axios.post(API_URL + "nutritionists", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios.post(API_URL + "login", {
    username,
    password
  })
  .then((response) => {
    console.log(response)
    if (response.data.token) {
      localStorage.setItem("nutritionist", JSON.stringify(response.data))
    }
    return response.data
  })
};

export default { register, login };
