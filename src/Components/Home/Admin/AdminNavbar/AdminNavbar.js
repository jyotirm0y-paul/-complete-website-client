import React from 'react';
import './AdminNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
    return (
        <div className="adminNavbar ">
            <div class="container adminNavbar">
                {/* <a style={{textAlign:'left'}} class="logo" href="#">Navbar</a> */}
                <h4>Cozy</h4>
                <ul>
                <li>
                    <Link to="/addService"><span>Add Service</span> 
                    </Link>
                </li>
                    <li>
                        <a class="nav-link" href="#"><FontAwesomeIcon className="navbar-icon" icon={faPlus} />Add Service</a>
                    </li>
                    <li>
                        <a class="nav-link" href="#"><FontAwesomeIcon className="navbar-icon" icon={faUserPlus} />Manage Admin</a>
                    </li>
                    <li>
                        <a class="nav-link" href="#"><FontAwesomeIcon className="navbar-icon" icon={faTasks} />Manage Admin</a>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default AdminNavbar;