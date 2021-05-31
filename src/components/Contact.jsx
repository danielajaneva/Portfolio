import React, { useState } from "react";

import { init, send } from "emailjs-com";
init("user_q5FqmfbxFF9QkIDVP8DYq");

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
    loading: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setToSend({ loading: true });
    send(
      "service_5nb0tkn",
      "template_3s0yfdv",
      toSend,
      "user_q5FqmfbxFF9QkIDVP8DYq"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        setToSend({
          from_name: "",
          reply_to: "",
          subject: "",
          message: "",
          loading: false,
        });

        return (
          <div className="notification">Your message was sent, thank you!</div>
        );
      })
      .catch((err) => {
        console.log("FAILED...", err);

        return (
          <div className="notification">
            Your message was not sent, try again!
          </div>
        );
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  //   <div id="form-message-warning" className="message">
  //   Your message was not sent, try again!
  // </div>
  // <div id="form-message-success" className="message">
  //   Your message was sent, thank you!
  // </div>

  return (
    <>
      <div className="bg-image"></div>
      <section className="contact">
        <div className="contact__form">
          <h3 className="contact__form--heading">Contact me</h3>
          <form
            // method="POST"
            // id="contactForm"
            // name="contactForm"
            onSubmit={onSubmit}
            className="contactForm"
          >
            <div className="form-group">
              <label className="label" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="from_name"
                placeholder="Name"
                value={toSend.from_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="label" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                name="reply_to"
                placeholder="Your email"
                value={toSend.reply_to}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group subject">
              <label className="label" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                value={toSend.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group message">
              <label className="label" htmlFor="#">
                Message
              </label>
              <textarea
                className="form-control"
                cols="30"
                rows="4"
                name="message"
                placeholder="Your message"
                value={toSend.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                {toSend.loading ? "Sending..." : "Send Message"}
              </button>
              <div className="submitting"></div>
            </div>
          </form>
        </div>

        <div className="contact__info">
          <h3 className="contact__info--heading">Let's get in touch</h3>
          <p className="contact__info--paragraph">
            I'm open for any suggestion or just to have a chat
          </p>

          <div className="contact__info--icon">
            <span className="fa fa-map-marker"></span>
          </div>
          <div className="contact__info--text">
            <p>
              <span>Address:</span> Oliver Kitanovski 9/5 , 1400 Veles,
              Macedonia
            </p>
          </div>

          <div className="contact__info--icon">
            <span className="fa fa-phone"></span>
          </div>
          <div className="contact__info--text">
            <p>
              <span>Phone:</span>
              <a href="tel://1234567920"> + 38971834023</a>
            </p>
          </div>

          <div className="contact__info--icon">
            <span className="fa fa-paper-plane"></span>
          </div>
          <div className="contact__info--text">
            <p>
              <span>Email:</span>
              <a href="mailto:danielajaneva.mail@gmail.com">
                danielajaneva.mail@gmail.com
              </a>
            </p>
          </div>

          <div className="contact__info--icon">
            <span className="fa fa-globe"></span>
          </div>
          <div className="contact__info--text">
            <p>
              <span>Website: </span> <a href="/">danielajaneva.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
