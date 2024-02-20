import { object } from "prop-types";
import React, { useState } from "react";

function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const[submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    setError({ ...error, [name]: validateInput(name, value) });
  };

  const validateInput = (name, value) => {
    switch (name) {
      case "name":
        return !value ? "Name is required" : "";
      case "email":
        return !value
          ? "Email is required"
          : !/\S+@\S+\.\S+/.test(value)
          ? "Email is invalid"
          : "";
      case "message":
        return !value ? "Message is required" : "";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    let valid = true;
    const{ email, name, message } = formData;
    
      if (!name || !email || !message) 
      {
        setError({email: !formData.email ? "Email is required" : '', name: !formData.name ? "Name is required" : '', 
        message: !formData.message ? "Message is required" : ''
      });
        valid = false;
      }
    
    if (!valid) return;

    setSubmitted(true);
  };

  return (
    <div>
      <h1>Contact</h1>
      {!submitted ? (
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <label className="form-label" htmlFor="name">Name:</label>
          <div className="col-auto">
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          </div>
            {error.name && <span>{error.name}</span>}
        </div>
        <div className="row g-3 align-items-center">
          <label className="form-label" htmlFor="email">Email:</label>
          <div className="col-auto">
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          </div>
          {error.email && <span>{error.email}</span>}
        </div>
        <div className="row g-3 align-items-center">
          <label className="form-label" htmlFor="message">Message:</label>
          <div className="col-auto">
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          </div>
            {error.message && <span>{error.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      ) : (<p>Form submitted!</p>)}
    </div>
  );
}

export default Contact;
