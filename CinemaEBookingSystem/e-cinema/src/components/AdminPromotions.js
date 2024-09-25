import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import PromotionsTable from './PromotionsTable';

import './Admin.css'; 
import './Breadcrumb.css';

const AdminPromotions = ( promo ) => {
  const [promotions, setPromotions] = useState([
    { id: 1, code: 'SAVE10', description: '10% off any movie' },
    { id: 2, code: 'HOLIDAYS2024', description: 'Spread the holiday spririt with a BOGO deal' },
    { id: 3, code: 'MUNCHIES2', description: 'Receive a medium drink with the purchase of any size popcorn' },
  ]);

  const handleAdd = (id) => {
    console.log(`Updating code with ID: ${id}`);
  };

  const handleDelete = (id) => {
    setPromotions(promotions.filter((promo) => promo.id !== id));
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
          <h1>Welcome, Admin1</h1>
          <PromotionsTable promotions={promotions} onDelete={handleDelete} />
          <button className="add" onClick={() => handleAdd(promo.id)}>Add new code</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPromotions;