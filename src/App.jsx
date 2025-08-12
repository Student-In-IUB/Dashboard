import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Overview from './Dashboard/Overview';
import Cars from './Dashboard/Cars';
import Users from './Dashboard/Users';
import Sales from './Dashboard/Sales';
import Blogs from './Dashboard/Blogs';
import Orders from './Dashboard/Orders';

function App() {
  return (
    <Router>
      <div className="flex">
        <Dashboard />
        <div className="flex-1">
          <Routes>
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/products" element={<Cars />} />
            <Route path="/users" element={<Users />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin-blogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
