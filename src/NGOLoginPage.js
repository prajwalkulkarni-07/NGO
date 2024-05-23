import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NGOLoginPage.css';

const NGOLoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, such as sending credentials to backend for validation
    // For now, let's simulate a successful login
    const isLoggedIn = true;
    if (isLoggedIn) {
      // Redirect to NGO dashboard upon successful login
      navigate('/ngo-dashboard');
    } else {
      alert('Login failed. Please try again.');
    }
  };

  const handleRegisterClick = () => {
    // Redirect to NGO registration page
    navigate('/ngo-registration');
  };

  return (
    <div className="wrapper">
      <div className="title">NGO Login</div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Password</label>
        </div>
        <div className="content">
          <div className="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="field">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">
          Not a member? <a href="#" onClick={handleRegisterClick}>Register now</a>
        </div>
      </form>
    </div>
  );
};

export default NGOLoginPage;