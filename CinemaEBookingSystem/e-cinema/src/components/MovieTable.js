import React from 'react';

const MovieTable = ({ movies = [] }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {movies.map((movie, index) => (
        <tr key={index}>
          <td>{movie.title}</td>
          <td>{movie.status ? movie.status : 'N/A'}</td>
          <td>
            <button onClick={() => handleUpdate(movie.id)}>Update</button>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
            <button onClick={() => handleSchedule(movie.id)}>Schedule</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const handleUpdate = (id) => {
  console.log(`Updating movie with ID: ${id}`);
};

const handleDelete = (id) => {
  console.log(`Deleting movie with ID: ${id}`);
};

const handleSchedule = (id) => {
  console.log(`Scheduling movie with ID: ${id}`);
};

export default MovieTable;