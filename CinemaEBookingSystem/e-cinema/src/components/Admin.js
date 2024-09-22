import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

import './Admin.css'; 
import './Breadcrumb.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Link to="/admin">
          <h2>E-Cinema Admin</h2>
        </Link>
        <nav className="admin-menu">
          <ul>
            <li><Link to="/admin/movies">Movies</Link></li>
            <li><Link to="/admin/users">Users</Link></li>
            <li><Link to="/admin/pricing">Pricing</Link></li>
            <li><Link to="/admin/promotions">Promotions</Link></li>
          </ul>
        </nav>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <p>You are logged in as <strong>Admin1</strong></p>
          <Link to="/logout">Logout</Link>
        </div>
        <div className="admin-body">
          <Breadcrumb />
          <h1>Welcome, Admin1</h1>
          <p>Select from the navigation menu to the side to start.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;