import React, { useState } from "react";
import Header from "../Common Pages/Header";
import Footer from "../Common Pages/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validation errors
  let [errors, setErrors] = useState({});


  let handleChange = (e) => {
    let { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // email regex....
  let validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  
  let validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Email is invalid";
    return newErrors;
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      toast.error("Please fix the errors.");
      return;
    }
    setErrors({});

    toast.success("Form submitted successfully!");


    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Header />

      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-6 mb-5 d-flex flex-column justify-content-center">
              <div>
                <h1 className="fw-bold">Contact</h1>
                <p>Looking forward to hearing from you</p>

                <p className="mb-2">
                  <strong className="me-2 pt-4">Phone:</strong>
                  <a href="tel:+919173767309" className="text-dark text-decoration-none">
                    +91 9173767309
                  </a>
                </p>

                <p className="mb-0">
                  <strong className="me-2 pt-4">Email:</strong>
                  <a href="mailto:hetavidesai08@gmail.com" className="text-dark text-decoration-none ">
                    hetavidesai08@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right Section -  Form */}
            <div className="col-md-6">
              <form noValidate onSubmit={handleSubmit}>
                <div className="row pt-5">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name*"
                      required
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name*"
                      required
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Messaage"
                  ></textarea>
                </div>

                <button
  type="submit"
  className="btn text-white px-5 py-2 w-100 w-md-auto"
  style={{
    backgroundColor: "#f4a900",
    borderRadius: "25px",
    fontWeight: "bold",
    border: "none",
  }}
>
  Submit
</button>

              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* React Toastify container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default Contact;
