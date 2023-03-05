import React from "react";
import "./index.css";

function Contact() {
  return (
    <section className="section is-medum" id="contact">
      <div className="columns">
        <div className="column is-4 mx-auto">
          <h1
            className="title is-2 has-text-centered is-border-bottom-brand mb-6"
            data-aos="zoom-out-right"
            data-aos-duration="1000"
          >
            Contact
          </h1>
          <form className="mt-4">
            <div
              className="container"
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea is-rounded"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </div>

              <div className="field">
                <div className="control has-text-right">
                  <button className="button is-rounded has-text-weight-bold bgcolor-brand">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
