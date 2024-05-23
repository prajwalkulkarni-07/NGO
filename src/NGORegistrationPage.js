import React, { useState } from 'react';
import styles from './NGORegistrationPage.module.css';

const NGORegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
    city: '',
    contactPersonName: '',
    websiteUrl: '',
    description: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    setRegistrationSuccess(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>NGO Registration</div>
      {registrationSuccess ? (
        <div className={styles.successMessage}>
          <p>Registration successful! Please login again.</p>
          <a href="/ngo-login">Go to NGO Login</a>
        </div>
      ) : (
        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            <div className={styles.userDetails}>
              <div className={styles.inputBox}>
                <span className={styles.details}>Name of the NGO:</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Email address:</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Password:</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Confirm Password:</span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Country:</span>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>State:</span>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>City:</span>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>Contact person name:</span>
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>NGO website URL:</span>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputBox}>
                <span className={styles.details}>NGO description:</span>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.button}>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NGORegistrationPage;