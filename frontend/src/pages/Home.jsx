import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authContext from '../context/auth/authContext'

const Home = () => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/notes');
        }
    }, [user, navigate]);

    return (
        <div className='container pt-5'>
            <div class="card text-center">
                <h5 class="card-header">Authorization</h5>
                <div class="card-body">
                    <p class="card-text">Looks like you are not Authorized user, Register/Login to continue.</p>
                    <Link to="/login" class="btn btn-primary mr-3 my-1">Login</Link>
                    <Link to="/register" class="btn btn-primary my-1">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Home