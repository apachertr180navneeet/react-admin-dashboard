// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'admin') {
      setAuth(true);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h3 className="text-center">Admin Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control"
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control"
                value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
