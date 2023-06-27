import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered!")
  };

  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">
<form onSubmit={handleSubmit}>
                <div class="mb-md-1 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-5 text-uppercase">Register Here</h2>
                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typeEmailX">Email</label>
                    <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typePasswordX">Password</label>
                    <input type="password" id="typePasswordX" class="form-control form-control-lg"
                     
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div class="form-outline form-white mb-4">
                    <label class="form-label" for="typePasswordX">Confirm Password</label>
                    <input type="password" id="typePasswordX" class="form-control form-control-lg"
                    
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button class="btn btn-outline-light btn-lg px-5 mt-5" type="submit">Register</button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Register;
