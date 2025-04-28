import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row justify-content-center align-items-center min-vh-60">
          <div className="col-md-6 col-lg-5 col-sm-10">
            <div className="card shadow-lg border-0 p-4 rounded-4">
              <h2 className="text-center mb-4">Welcome Back</h2>
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <small>
                    New here?{" "}
                    <Link to="/register" className="text-decoration-none text-primary fw-semibold">
                      Register
                    </Link>
                  </small>
                  <small className="text-muted">Forgot password?</small>
                </div>
                <div className="d-grid">
                  <button className="btn btn-dark" type="submit" disabled>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
