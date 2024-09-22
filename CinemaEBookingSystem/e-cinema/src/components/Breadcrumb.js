import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap = {
    'movies': 'Movies',
    'users': 'Users',
    'pricing': 'Pricing',
    'promotions': 'Promotions'
  };

  return (
    <nav className="breadcrumb">
      <Link to="/admin">Home</Link>
      {pathnames.length > 1}
      {pathnames
        .filter(value => value !== 'admin')
        .map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          
          return (
            <span key={to}>
              {' > '}
              <Link to={pathnames}>{breadcrumbMap[value] || value}</Link>
            </span>
          );
      })}
    </nav>
  );
};

export default Breadcrumb;