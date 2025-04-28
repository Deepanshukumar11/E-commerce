import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light border-top py-4 mt-5">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="mb-1 fw-semibold text-primary">Follow Me</h5>
            <div className="d-flex justify-content-center gap-4">
              <a
                href="https://github.com/Deepanshukumar11"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center"
              >
                <i className="fab fa-github fs-5 me-2"></i> GitHub
              </a>
              <a
                href="https://instagram.com/YOUR_INSTAGRAM"
                target="_blank"
                rel="noreferrer"
                className="text-dark text-decoration-none d-flex align-items-center"
              >
                <i className="fab fa-instagram fs-5 me-2"></i> Instagram
              </a>
            </div>
          </div>

          <div className="col-md-6 text-muted small">
            <p className="mb-1">&copy; {new Date().getFullYear()} ReactShop. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
