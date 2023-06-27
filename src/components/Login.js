import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Successfully Login");
  };
  function handleclick(){
    navigate("/Register");
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fs-4">Login</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className='row'>
                <div className='col-md-2'>
                <button type="submit" className="btn btn-dark mt-3">Login</button>
                </div>
                <div className='col-md-2 mt-4'>
            <a href='/Register' onClick={handleclick}>Register</a>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
