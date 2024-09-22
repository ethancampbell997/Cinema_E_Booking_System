import React from 'react';

const PromotionsTable = ({ promotions, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {promotions.map((promotion) => (
        <tr key={promotion.id}>
          <td>{promotion.code}</td>
          <td>{promotion.description}</td>
          <td>
            <button onClick={() => onDelete(promotion.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PromotionsTable;