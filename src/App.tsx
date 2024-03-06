// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './model/Signup';
import Login from './model/Login';
import Home from './model/Home';
import AddBalance from './model/AddBalance';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addSalary" element={<AddBalance />} />
      </Routes>
    </Router>
  );
};

export default App;
