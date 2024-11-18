import { useState } from "react";
import "../pages/Contact.css"; // Import the CSS file

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState(""); // State for feedback message
  const [feedbackType, setFeedbackType] = useState(""); // State for feedback type (error or success)

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() && !email.trim() && !message.trim()) {
        setFeedback("Please fill in all fields.");
        setFeedbackType("error");
    }else if (!name.trim()) {
        setFeedback("Please enter your name.");
        setFeedbackType("error");
      } else if (!message.trim()) {
        setFeedback("Please enter a message.");
        setFeedbackType("error");
      }else if (!isValidEmail(email)) {
        setFeedback("Please enter a valid email address.");
        setFeedbackType("error");
      } else {
        setFeedback("Form submitted successfully!");
        setFeedbackType("success");
        console.log("Form Data:", formData);
      // reset form
      setFormData({ name: "", email: "", message: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

<div className="container">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea
          rows="5"
          className="form-control"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          autoComplete="off"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
</div>
{/* Feedback Message */}
      {feedback && <p className={`feedback ${feedbackType}`}>{feedback}</p>}
    </form>
  );    
}
