import axios from "axios"
import toast from 'react-hot-toast';
import constants from "../../constants"

const { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT } = constants;

const apiEndpoint = process.env.REACT_APP_API_URL

export const register = (data, navigate) => async (dispatch) => {
    const url = `${apiEndpoint}/user/register`
    dispatch({ type: USER_REGISTER })

    await axios.post(url, data).then((res) => {
        if (res.data.success) {
            dispatch({ type: USER_REGISTER_SUCCESS })
            toast.success(res.data.message);
            navigate('/login');
        }
    }).catch((res) => {
        dispatch({ type: USER_REGISTER_FAILED, error: res.response.data.error })
        toast.error(res.response.data.error)
    })
}

export const login = (data, setUser, navigate) => async (dispatch) => {
    const url = `${apiEndpoint}/user/login`
    dispatch({ type: USER_LOGIN })

    await axios.post(url, data).then((res) => {
        if (res.data.success) {
            const user = res.data.user;
            setUser(user);
            dispatch({ type: USER_LOGIN_SUCCESS, user })
            toast.success(res.data.message);
            navigate('/notes');
        }
    }).catch((res) => {
        dispatch({ type: USER_LOGIN_FAILED, error: res.response.data.error })
        toast.error(res.response.data.error)
    })
}

export const userLogout = () => (dispatch) => {
    dispatch({ type: 'USER_LOGOUT' })
}