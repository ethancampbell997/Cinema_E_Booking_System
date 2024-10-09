import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from './Breadcrumb';
import MovieTable from './MovieTable';

import './Admin.css'; 
import './Breadcrumb.css';

const AdminMovies = ({ allMovies = [] }) => {
  const handleAdd = (id) => {
    console.log(`Updating movie with ID: ${id}`);
  };
  
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
          <MovieTable movies={allMovies} />
          <button className="add" onClick={() => handleAdd}>Add new movie</button>
        </div>
      </div>
    </div>
  );
};

export default AdminMovies;