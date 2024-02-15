import emailjs from "@emailjs/browser";
import { useRef } from "react";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    emailjs
      .sendForm("service_encmjcx", "template_6bkbqqu", form.current, {
        user_name: userName,
        user_email: userEmail,
        message: message,
        publicKey: "phA67YokXKNfqIKUB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container-fluid bg-white p-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-9">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="user_name"
                placeholder=""
              />
              <label htmlFor="userName">User Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                placeholder=""
                name="user_email"
                type="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                placeholder=""
                name="message"
              ></textarea>
              <label htmlFor="message">Your Message</label>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
