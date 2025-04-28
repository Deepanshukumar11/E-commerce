import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateForm = () => {
    const errors = {
      name: formData.name === "",
      email: !/\S+@\S+\.\S+/.test(formData.email),
      message: formData.message === "",
    };
    setFormErrors(errors);
    return !Object.values(errors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission success
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => setFormSubmitted(false), 5000); // Hide success message after 5 seconds
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className={`form-control ${formErrors.name ? "is-invalid" : ""}`}
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.name && (
                  <div className="invalid-feedback">Name is required</div>
                )}
              </div>
              <div className="form my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                  id="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.email && (
                  <div className="invalid-feedback">
                    Please enter a valid email address
                  </div>
                )}
              </div>
              <div className="form my-3">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  className={`form-control ${formErrors.message ? "is-invalid" : ""}`}
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.message && (
                  <div className="invalid-feedback">Message is required</div>
                )}
              </div>
              {formSubmitted && (
                <div className="alert alert-success text-center">
                  Thank you for contacting us! We will get back to you soon.
                </div>
              )}
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled={!formData.name || !formData.email || !formData.message}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
