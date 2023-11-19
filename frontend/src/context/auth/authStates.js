import React, { useState } from 'react'
import authContext from './authContext'

const AuthStates = ({ children }) => {

    // localStorage.setItem('user', JSON.stringify({ name: 'test', email: 'test@test.com' }))
    const auth = localStorage.getItem('user');
    const authUser = JSON.parse(auth)
    const [user, setUser] = useState(authUser)

    const setAuth = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user)
    }

    const removeUser = () => {
        localStorage.removeItem('user');
        setUser(null)
    }

    const state = {
        user,
        setUser: setAuth,
        removeUser
    }
    return (
        <authContext.Provider value={state} >
            {children}
        </authContext.Provider>
    )
}

export default AuthStates