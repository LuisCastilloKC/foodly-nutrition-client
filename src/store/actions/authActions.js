import axios from "axios"


export const signUp = (user) => {
    return (dispatch) => {
        axios.post("http://localhost:3000/signup", user)
        .then(token =>{
            localStorage.setItem("token", token.data)
            dispatch({
                type: "SIGN_UP",
                token: token.data
            })
        })
        .catch(error => {
            console.log(error.response)
        })
    }
}