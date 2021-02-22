import emailjs from "emailjs-com";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Contactus = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xrrnagj",
        "template_lq1yzp1",
        e.target,
        "user_VmDJx3isBkMiqR0oEHefs"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            console.log("if condition");
            handleShow();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log("In sendEmail");
  };

  return (
    <>
      <form onSubmit={sendEmail} role="form" className="php-email-form">
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="from_name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message"
            required
            defaultValue={""}
          />
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>

      {/* Modal for successful message */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Message sent successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contactus;
