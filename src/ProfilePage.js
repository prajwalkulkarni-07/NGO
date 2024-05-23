import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [ngoName, setNgoName] = useState('NGO Name');
  const [establishmentDate, setEstablishmentDate] = useState('2023-01-01');
  const [contactPersonName, setContactPersonName] = useState('John Doe');
  const [contactPersonEmail, setContactPersonEmail] = useState('john.doe@example.com');
  const [contactPersonMobile, setContactPersonMobile] = useState('+1 123-456-7890');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the updated profile information to the server or perform any necessary actions
  };

  return (
    <div className="profile-container">
      <header>
        <h1>Profile</h1>
      </header>
      <section className="profile">
        <p>Welcome to your NGO dashboard!</p>
        <div className="profile-info">
          {isEditing ? (
            <>
              <label>
                NGO Name:
                <input
                  type="text"
                  value={ngoName}
                  onChange={(e) => setNgoName(e.target.value)}
                />
              </label>
              <label>
                Date of Establishment:
                <input
                  type="date"
                  value={establishmentDate}
                  onChange={(e) => setEstablishmentDate(e.target.value)}
                />
              </label>
              <label>
                Contact Person Name:
                <input
                  type="text"
                  value={contactPersonName}
                  onChange={(e) => setContactPersonName(e.target.value)}
                />
              </label>
              <label>
                Contact Person Email:
                <input
                  type="email"
                  value={contactPersonEmail}
                  onChange={(e) => setContactPersonEmail(e.target.value)}
                />
              </label>
              <label>
                Contact Person Mobile:
                <input
                  type="tel"
                  value={contactPersonMobile}
                  onChange={(e) => setContactPersonMobile(e.target.value)}
                />
              </label>
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <p>NGO Name: {ngoName}</p>
              <p>Date of Establishment: {establishmentDate}</p>
              <p>Contact Person Name: {contactPersonName}</p>
              <p>Contact Person Email: {contactPersonEmail}</p>
              <p>Contact Person Mobile: {contactPersonMobile}</p>
              <button onClick={handleEdit}>Edit</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
