import jwtDecode from "jwt-decode"

const initialState = {
    token: localStorage.getItem("token"),
    firstname: null,
    lastname: null,
    email: null,
    _id: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP": alert("welcome")
        const user = jwtDecode(action.token)
        return {
            ...initialState,
            token: action.token,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            _id: user._id
        }
        default:
             return state
    }
}

export default authReducer