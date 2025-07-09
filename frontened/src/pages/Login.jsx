import React, { useState } from 'react';
import axios from 'axios'; // For API requests
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError('');
    setSuccess(false); 

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token); 

      setSuccess(true);

   

      alert('Login successful!');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      
      {error && <p className="error-message">{error}</p>}
      
      {success && <p className="success-message">Login successful!</p>}

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
