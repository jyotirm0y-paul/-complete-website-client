import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar2 = () => {
  return (
    <div>
      <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard"><span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService"><span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/manageService"><span>Manage Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addReview"><span>Add Review</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin"><span>Add Admin</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/orderList"><span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/allOrderList"><span>All Order List</span> 
                    </Link>
                </li>
                </ul>
    </div>
  );
};

export default Sidebar2;