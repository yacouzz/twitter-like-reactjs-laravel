import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props)=>{
    console.log(props)
    return(
    <>
     <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Laravel
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="tsen">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                    </ul>

                    <ul className="navbar-nav ml-auto">


                    { !props.user.user.currentUser.user ?
                           <><li className="nav-item">
                                <Link className="nav-link" to="/login">login</Link>
                            </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                </>
                            :

                            <li className="nav-item dropdown">
                                <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {props.user.user.currentUser.user.name}  <span className="caret"></span>
                                </a>

                                {/*Logout ICI */}
                            </li>
}

                    </ul>
                </div>
            </div>
        </nav>

    </>)
}

const mapStateToProps = (currentUser) => ({
    user:currentUser
})

export default connect(mapStateToProps)(Navbar);
