import axios from "axios"


export const signUp = (user) => {
    return (dispatch) => {
        axios.post("http://localhost:3000/signup", user)
        .then(token =>{
            localStorage.setItem("token", token.data.token)
            dispatch({
                type: "SIGN_UP",
                token: token.data.token,
                user: user
            })
        })
        .catch(error => {
            console.log(error.response)
        })
    }
}

export const loadUser = () => {
    return (dispatch, getState) =>{
        const token = getState().auth.token
        if(token){
            dispatch({
                type: "USER_LOADED",
                token
            })
        } else return null
    }
}