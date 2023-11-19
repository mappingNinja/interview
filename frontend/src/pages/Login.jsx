import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import { login } from '../redux/actions/userActions';

const Login = () => {
    const { setUser } = useContext(authContext)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading } = useSelector(state => state?.userLogin)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    const handleLogin = () => {
        const data = { email, password }
        dispatch(login(data, setUser, navigate))
    }

    return (
        <div className='container mt-5'>
            <div class="card">
                <h5 class="card-header text-center">Login
                    {loading ? <div class="ml-3 spinner-border" role="status" /> : null}
                </h5>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login