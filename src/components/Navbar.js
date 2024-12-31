import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Calendar Communication</h1>
        <div>
          <Link to="/" className="mx-4 hover:text-gray-200">User</Link>
          <Link to="/admin" className="mx-4 hover:text-gray-200">Admin</Link>
          <Link to="/reporting" className="mx-4 hover:text-gray-200">Reporting</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
