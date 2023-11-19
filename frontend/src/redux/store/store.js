import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { upDownReducer } from "../reducers/upDownReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, userRegisterReducer } from "../reducers/userReducer";
import { addNote, fetchNote, getNotes, updateNote } from "../reducers/notesReducer";

const rootReducer = combineReducers({
    number: upDownReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    notes: getNotes,
    addNote: addNote,
    fetchNote: fetchNote,
    updateNote: updateNote
})

const middlewares = [thunk];

const middleware = composeWithDevTools(applyMiddleware(...middlewares))

const initalState = { number: { number: 0 } }
const store = createStore(rootReducer, initalState, middleware)

export default store;