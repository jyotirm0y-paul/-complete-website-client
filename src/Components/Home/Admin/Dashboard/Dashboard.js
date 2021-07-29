import React from 'react';
// import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar2/Sidebar2';

const Dashboard = () => {


  
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar2></Sidebar2>
        {/* <AdminNavbar></AdminNavbar> */}
      </div>
      <div className="col-md-8">
        <h1>this is description</h1>
      </div>
    </div>
  );
};

export default Dashboard;