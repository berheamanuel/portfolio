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
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
            {error.name && <span>{error.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <span>{error.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleChange}
          ></textarea>
            {error.message && <span>{error.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
