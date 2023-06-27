import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-4">Register</h5>
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3 mt-3">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group mb-3 mt-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-dark mt-4">
        Register
      </button>
    </form>
    </div>
      </div>
    </div>
    </div>
      </div>
    
  
  );
};

export default Register;
