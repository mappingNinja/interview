import constants from "../../constants"
const initialState = {}
const { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT } = constants;

export const userRegisterReducer = (state = initialState, action) => {
    const { error, type } = action
    switch (type) {
        case USER_REGISTER:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false };
        case USER_REGISTER_FAILED:
            return { loading: false, error };
        default:
            return initialState
    }
}

export const userLoginReducer = (state = initialState, action) => {
    const { user, error, type } = action
    switch (type) {
        case USER_LOGIN:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, user };
        case USER_LOGIN_FAILED:
            return { loading: false, error };
        case USER_LOGOUT:
            return initialState
        default:
            return initialState
    }
}