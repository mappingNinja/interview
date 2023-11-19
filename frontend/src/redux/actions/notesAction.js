import axios from "axios"
import { useContext } from "react";
import toast from 'react-hot-toast';
import constants from "../../constants"

const {
    GET_NOTE, GET_NOTE_SUCCESS, GET_NOTE_FAILED,
    ADD_NOTE, ADD_NOTE_SUCCESS, ADD_NOTE_FAILED,
    FETCH_NOTE, FETCH_NOTE_SUCCESS, FETCH_NOTE_FAILED,
    UPDATE_NOTE, UPDATE_NOTE_SUCCESS, UPDATE_NOTE_FAILED,
    DELETE_NOTE, DELETE_NOTE_SUCCESS, DELETE_NOTE_FAILED
} = constants;

const apiEndpoint = process.env.REACT_APP_API_URL

const getConfig = (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        }
    }

    return config;
}
export const getNotes = (data) => async (dispatch) => {
    const url = `${apiEndpoint}/notes/get`
    const config = getConfig(data?.token)
    dispatch({ type: GET_NOTE })
    await axios.get(url, config)
        .then((res) => {
            const { success, notes } = res.data
            if (success) {
                dispatch({ type: GET_NOTE_SUCCESS, notes })
            }
        })
        .catch((res) => {
            dispatch({ type: GET_NOTE_FAILED, error: res?.response?.data?.error })
            toast.error(res?.response?.data?.error)
        })
}

export const addNotes = (data, callback) => async (dispatch) => {
    const url = `${apiEndpoint}/notes/insert`;
    const config = getConfig(data?.token)
    dispatch({ type: ADD_NOTE })
    await axios.post(url, data, config)
        .then((res) => {
            const { success, message } = res?.data
            if (success) {
                dispatch({ type: ADD_NOTE_SUCCESS, message })
                toast.success(message);
                return;
            }
        })
        .catch((res) => {
            dispatch({ type: ADD_NOTE_FAILED, error: res.response.data.error })
            toast.error(res.response.data.error)
        })
    callback()
}

export const fetchNote = (data, callback) => async (dispatch) => {
    const url = `${apiEndpoint}/notes/fetch/${data?.noteId}`;
    const config = getConfig(data?.token);
    dispatch({ type: FETCH_NOTE })
    await axios.get(url, config)
        .then((res) => {
            const { success, note } = res?.data
            if (success) {
                dispatch({ type: FETCH_NOTE_SUCCESS, note })
                return;
            }
        })
        .catch((res) => {
            dispatch({ type: FETCH_NOTE_FAILED, error: res?.response?.data?.error })
            toast.error(res?.response?.data?.error)
        })
}

export const updateNote = (data) => async (dispatch) => {
    const url = `${apiEndpoint}/notes/update`;
    dispatch({ type: UPDATE_NOTE })
    const config = getConfig(data?.token);

    await axios.post(url, data, config)
        .then((res) => {
            const { success, message } = res?.data
            if (success) {
                toast.success(message);
                dispatch({ type: UPDATE_NOTE_SUCCESS, message })
                return;
            }
        })
        .catch((res) => {
            dispatch({ type: UPDATE_NOTE_FAILED, error: res?.response?.data?.error })
            toast.error(res?.response?.data?.error)
        })

}

export const deleteNote = (data, callback) => async (dispatch) => {
    const url = `${apiEndpoint}/notes/delete`;
    dispatch({ type: DELETE_NOTE })
    const config = getConfig(data?.token);

    await axios.post(url, data, config)
        .then((res) => {
            const { success, message } = res?.data
            if (success) {
                toast.success(message);
                dispatch({ type: DELETE_NOTE_SUCCESS, message })
                return;
            }
        })
        .catch((res) => {
            dispatch({ type: DELETE_NOTE_FAILED, error: res?.response?.data?.error })
            toast.error(res?.response?.data?.error)
        })
    callback();
}