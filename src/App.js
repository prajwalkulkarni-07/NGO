import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NGOLoginPage from './NGOLoginPage';
import PhilanthropistLoginPage from './PhilanthropistLoginPage';
import NGORegistrationPage from './NGORegistrationPage';
import PhilanthropistRegistrationPage from './PhilanthropistRegistrationPage';
import NGODashboard from './NGODashboard';
import PhilanthropistDashboard from './PhilanthropistDashboard';
import ProfilePage from './ProfilePage'; // Import the new component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ngo-login" element={<NGOLoginPage />} />
          <Route path="/philanthropist-login" element={<PhilanthropistLoginPage />} />
          <Route path="/ngo-registration" element={<NGORegistrationPage />} />
          <Route path="/philanthropist-registration" element={<PhilanthropistRegistrationPage />} />
          <Route path="/ngo-dashboard" element={<NGODashboard />} />
          <Route path="/philanthropist-dashboard" element={<PhilanthropistDashboard />} />
          <Route path="/profile" element={<ProfilePage />} /> {/* Add route for profile page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
