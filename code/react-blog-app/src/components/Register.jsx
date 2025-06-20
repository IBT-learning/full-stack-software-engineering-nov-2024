import React, { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }
    setError('');
    try {
      await registerUser(username, email, password);
      setSuccess('Registration successful! Redirecting to login...');

      // clear form
      setUsername('');
      setEmail('');
      setPassword('');

      // navigate to login page after 2 seconds
      setTimeout(() => {
        navigate('/login'); 
      }, 2000);
    } catch (err) {
      setError(err?.message || 'Registration failed');
    }
  }

  return (
    <div>
      <h1>Register</h1>
      {error && <p style={{ color:'red' }}>{error}</p>}
      {success && <p style={{ color:'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        /><br />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        /><br />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;