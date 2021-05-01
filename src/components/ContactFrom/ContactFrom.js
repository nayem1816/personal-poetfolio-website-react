import React from "react";
import emailjs from "emailjs-com";

const ContactFrom = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gndarqm",
        "template_32z42c8",
        e.target,
        "user_mzUNrvFIxt1NlMecdtngw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank You for your message.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <form className="contact-form row g-3 p-4" onSubmit={sendEmail}>
      <div class="col-12">
        <label class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div class="col-12">
        <label class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="example@gmail.com"
        />
      </div>
      <div class="col-12">
        <label class="form-label">Subject</label>
        <input
          type="text"
          class="form-control"
          name="subject"
          placeholder="Subject"
        />
      </div>
      <div class="col-md-6">
        <label class="form-label">
          Message
        </label>
        <textarea class="form-control" name="message" rows="3"></textarea>
      </div>
      <div class="col-12 mt-3">
        <button type="submit" class="btn btn-primary">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactFrom;
