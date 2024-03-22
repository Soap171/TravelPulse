import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    const errors = {};
    if (!userName.trim()) {
      errors.userName = "User Name is required";
    }
    if (!userEmail.trim()) {
      errors.userEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      errors.userEmail = "Email is invalid";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm("service_encmjcx", "template_6bkbqqu", form.current, {
          user_name: userName,
          user_email: userEmail,
          message: message,
          publicKey: "phA67YokXKNfqIKUB",
        })
        .then(
          () => {
            setSubmissionStatus("success");
            setUserName("");
            setUserEmail("");
            setMessage("");
          },
          (error) => {
            setSubmissionStatus("error");
          }
        );
    } else {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="container-fluid bg-white p-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-9">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errors.userName && "is-invalid"}`}
                name="user_name"
                placeholder=""
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="userName">User Name</label>
              {errors.userName && (
                <div className="invalid-feedback">{errors.userName}</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                className={`form-control ${errors.userEmail && "is-invalid"}`}
                placeholder=""
                name="user_email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              {errors.userEmail && (
                <div className="invalid-feedback">{errors.userEmail}</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <textarea
                className={`form-control ${errors.message && "is-invalid"}`}
                placeholder=""
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="message">Your Message</label>
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </div>
            <div className="text-center">
              <button
                className="btn btn-success px-3"
                type="submit"
                value="Send"
              >
                Submit
              </button>
            </div>
            {submissionStatus === "success" && (
              <div className="alert alert-success mt-3" role="alert">
                Message sent successfully!
              </div>
            )}
            {submissionStatus === "error" && (
              <div className="alert alert-danger mt-3" role="alert">
                Failed to send message. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
