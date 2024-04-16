import React from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import Signup from './model/Signup';
import Login from './model/Login';
import Home from './model/Home';
import AddBalance from './model/AddBalance';
import AddExpense from './model/AddExpense';
import AddGoal from './model/AddGoal';
import RemindersPage from './model/RemindersPage';
import AddReminder from './model/AddReminder';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/"  element={<Navigate to="/login" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addBalance" element={<AddBalance />} />
          <Route path="/addExpense" element={<AddExpense />} />
          <Route path="/addGoal" element={<AddGoal />} />
          <Route path="/remindersPage" element={<RemindersPage />} />
          <Route path="/addReminder" element={<AddReminder />} />
        </Routes>
    </Router>
  );
};

export default App;
