import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; 
const Signup = () => {  
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const [success, setSuccess] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log('Register button clicked'); 

    setError('');
    setSuccess(false);

    try {
      console.log('Submitting data:', { name, email, password });

      const response = await axios.post('http://127.0.0.1:5000/api/auth/register', {
        name,
        email,
        password,
      });

      console.log('Response from server:', response.data);

      setSuccess(true);
      alert('Registration successful!'); 

      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error response:', error.response?.data);

      setError(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>

      {error && <p className="error-message">{error}</p>}

      {success && <p className="success-message">Registration successful!</p>}

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          required
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup; 
