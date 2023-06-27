import React from 'react';


function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Menu</h5>
            <ul className="list-unstyled">
              <li><a href="/" className='link-light link-underline-dark'>Home</a></li>
              <li><a href="/about"className='link-light link-underline-dark'>About Us</a></li>
              <li><a href="/login"className='link-light link-underline-dark'>Log In</a></li>
              <li><a href="/contact" className='link-light link-underline-dark'>Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Useful Link</h5>
            <ul className="list-unstyled">
              <li><a href="/" className='link-light link-underline-dark'>FAQ</a></li>
              <li><a href="/" className='link-light link-underline-dark'>Reviews</a></li>
              <li><a href="/" className='link-light link-underline-dark'>Privacy Policy and Terms of Service</a></li>
              <li><a href="/" className='link-light link-underline-dark'>Return and Refund Policy</a></li>
              <li><a href="/" className='link-light link-underline-dark'>Payment Options</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="mb-3 fs-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Address: 37C, Chandigarh</li>
              <li><i className="fa fa-phone mr-2" aria-hidden="true"></i>Call: +91 9876543210</li>
              <li><i className="fa fa-envelope mr-2" aria-hidden="true"></i>Email: Tshoppee@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



