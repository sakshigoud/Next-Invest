// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddInvestment from './components/AddInvestment';
import EmailList from './components/EmailList';
import LoginForm from './components/Login';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/AddInvestment" element={<AddInvestment />} />
        <Route path="/EmailList" element={<EmailList />} />
      </Routes>
    </Router>

  );
};

export default App;
