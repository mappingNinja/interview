import constants from "../../constants"
const initialState = {};

const {
    GET_NOTE, GET_NOTE_SUCCESS, GET_NOTE_FAILED,
    ADD_NOTE, ADD_NOTE_SUCCESS, ADD_NOTE_FAILED,
    FETCH_NOTE, FETCH_NOTE_SUCCESS, FETCH_NOTE_FAILED,
    UPDATE_NOTE, UPDATE_NOTE_SUCCESS, UPDATE_NOTE_FAILED,
    DELETE_NOTE, DELETE_NOTE_SUCCESS, DELETE_NOTE_FAILED
} = constants;


export const addNote = (state = initialState, action) => {
    const { type, message, error } = action
    switch (type) {
        case ADD_NOTE:
            return { loading: true }
        case ADD_NOTE_SUCCESS:
            return { loading: false, message }
        case ADD_NOTE_FAILED:
            return { loading: false, error }
        default:
            return initialState
    }
}

export const getNotes = (state = initialState, action) => {
    const { type, notes, error } = action
    switch (type) {
        case GET_NOTE:
            return { loading: true }
        case GET_NOTE_SUCCESS:
            return { loading: false, notes }
        case GET_NOTE_FAILED:
            return { loading: false, error }
        default:
            return initialState
    }
}

export const fetchNote = (state = initialState, action) => {
    const { type, note, error } = action
    switch (type) {
        case FETCH_NOTE:
            return { loading: true }
        case FETCH_NOTE_SUCCESS:
            return { loading: false, note }
        case FETCH_NOTE_FAILED:
            return { loading: false, error }
        default:
            return initialState
    }
}

export const updateNote = (state = initialState, action) => {
    const { type, message, error } = action
    switch (type) {
        case UPDATE_NOTE:
            return { loading: true }
        case UPDATE_NOTE_SUCCESS:
            return { loading: false, message }
        case UPDATE_NOTE_FAILED:
            return { loading: false, error }
        default:
            return initialState
    }
}

export const deleteNote = (state = initialState, action) => {
    const { type, message, error } = action
    switch (type) {
        case DELETE_NOTE:
            return { loading: true }
        case DELETE_NOTE_SUCCESS:
            return { loading: false, message }
        case DELETE_NOTE_FAILED:
            return { loading: false, error }
        default:
            return initialState
    }
}