import axios from 'axios'

const API_URL = http://localhost:3000/

const register = (username, email, password) => {
    return axios.post(API_URL + "nutritionists", {
        username,
        email,
        password
    })
}

export default {register}