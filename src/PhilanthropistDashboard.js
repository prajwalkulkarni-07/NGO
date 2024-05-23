// PhilanthropistDashboard.js

import React, { useState } from 'react';
import './PhilanthropistDashboard.css';
import NGODetails from './NGODetails';

const PhilanthropistDashboard = () => {
  const [listedNGOs, setListedNGOs] = useState([
    { id: 1, name: 'NGO 1', description: 'Description of NGO 1' },
    { id: 2, name: 'NGO 2', description: 'Description of NGO 2' },
    { id: 3, name: 'NGO 3', description: 'Description of NGO 3' },
  ]);

  const [selectedNGO, setSelectedNGO] = useState(null);

  const handleNGOClick = (ngo) => {
    setSelectedNGO(ngo);
  };

  const handleCloseDetails = () => {
    setSelectedNGO(null);
  };

  const handleDonationHistory = () => {
    // Handle donation history navigation
  };

  const handleLikedNGOs = () => {
    // Handle liked NGOs navigation
  };

  const handleProfile = () => {
    // Handle profile navigation
  };

  const handleMessaging = () => {
    // Handle messaging navigation
  };

  const handleLogout = () => {
    // Handle logout functionality
  };

  return (
    <div className="philanthropist-dashboard">
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={handleDonationHistory}>Donation History</button>
            </li>
            <li>
              <button onClick={handleLikedNGOs}>
                <i className="fas fa-heart"></i>
              </button>
            </li>
            <li>
              <button onClick={handleMessaging}>
                <i className="fas fa-envelope"></i>
              </button>
            </li>
            <li>
              <button onClick={handleProfile}>
                <i className="fas fa-user-circle"></i>
              </button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Listed NGOs</h1>
        <ul className="ngo-list">
          {listedNGOs.map((ngo) => (
            <li key={ngo.id} onClick={() => handleNGOClick(ngo)}>
              <h2>{ngo.name}</h2>
              <p>{ngo.description}</p>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        {/* Add footer content */}
      </footer>
      <NGODetails ngo={selectedNGO} onClose={handleCloseDetails} />
    </div>
  );
};

export default PhilanthropistDashboard;