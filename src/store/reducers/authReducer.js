import jwtDecode from "jwt-decode"

const initialState = {
    token: localStorage.getItem("token"),
    firstname: null,
    lastname: null,
    email: null,
    id: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP": alert("welcome")
        const user = jwtDecode(action.token)
        console.log(user)
        console.log("Line 16", jwtDecode(action.token))
        return {
            ...initialState,
            token: action.token,
            firstname: action.user.firstname,
            lastname: action.user.lastname,
            email: action.user.email,
            id: user.user_id,

        }
        default:
             return state
    }
}

export default authReducer