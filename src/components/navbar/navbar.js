import React from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav className="navbar cus-bg">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <Link to="/" style={{ textDecoration: 'none' }}>
            <span className="cus-brand">BandRepo</span>
        </Link>
        </nav>
    );
}
export default Navbar;