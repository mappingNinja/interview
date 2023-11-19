import React from 'react'
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremenet, incremenet } from '../redux/actions/upDownAction';
import authContext from "../context/auth/authContext";

const ReduxContext = () => {

    const { user, setUser, removeUser } = useContext(authContext)
    const dispatch = useDispatch();
    const { number } = useSelector(state => state?.number);

    return (
        <div>
            <div>
                <h1>context</h1>
                <div>Hello {user?.name}</div>
                <button onClick={setUser}>Login</button>
                <button onClick={removeUser}>LogOut</button>

            </div>

            <div style={{ marginTop: '20px' }}>
                <h1>Redux</h1>
                <button onClick={() => dispatch(decremenet())}>DEC</button>
                <input type="number" value={number} />
                <button onClick={() => dispatch(incremenet())}>INC</button>
            </div>
        </div>
    )
}

export default ReduxContext