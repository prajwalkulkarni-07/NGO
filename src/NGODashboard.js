import React from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import './NGODashboard.css';
import ListingPage from './ListingPage';

const NGODashboard = () => {
  const navigate = useNavigate();

  const handleListingClick = () => {
    navigate('/create-listing');
  };

  const handleLogout = () => {
    // Handle logout logic
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to the profile page
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>NGO Dashboard</h1>
        <nav>
          <ul>
            <li>
              <button onClick={handleProfileClick}>Profile</button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="listing-section">
          <button className="listing-button" onClick={handleListingClick}>
            +
            <br />
            Make a listing
          </button>
        </section>

        <section className="donation-history">
          <h2>Donation History</h2>
          {/* Add donation history graph component */}
        </section>
      </main>
    </div>
  );
};

export default NGODashboard;
