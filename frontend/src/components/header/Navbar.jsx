import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import authContext from '../../context/auth/authContext'
import AddNoteModal from './AddNoteModal';

const Navbar = () => {
    const { user } = useContext(authContext);
    const { pathname: pathName } = useLocation();

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Coding</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/notes">Notes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/redux-context">Redux/Context</Link>
                        </li>
                    </ul>
                    {user && pathName === "/notes" ? (
                        <form class="form-inline my-2 my-lg-0">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#addNoteModal">Add Note</button>
                        </form>
                    ) : null}
                    <ul class="navbar-nav mr-4">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="/register">Register</Link>
                                <Link class="dropdown-item" to="/login">Login</Link>
                                <Link class="dropdown-item" to="/logout">Logout</Link>

                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <AddNoteModal />
        </div>
    )
}

export default Navbar