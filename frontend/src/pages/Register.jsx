import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.userRegister)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleOnClick = (e) => {
        e.preventDefault();
        handleRegister();
    }

    const handleRegister = () => {
        const data = { name, email, phone, password }
        dispatch(register(data, navigate))
    }
    return (
        <div className='container mt-4'>
            <div class="card">
                <h5 class="card-header text-center">Register
                    {loading ? <div class="ml-3 spinner-border" role="status" /> : null}
                </h5>

                <div class="card-body">
                    <form onSubmit={handleOnClick}>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">phone</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="123456789" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" onClick={handleOnClick} class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register