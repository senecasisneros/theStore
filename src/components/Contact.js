import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container" id="registration-form">
        <div className="image" />
        <div className="frm">
          <h1>Contact Us</h1>
          <form method="POST" action="">
            <div className="form-group">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Enter name"
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="_replyto"
                required
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="phone">
                Phone Number:
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="text">
                Message:
              </label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Type Your Message Here...."
                name="message"
                required
              />
            </div>
            <div className="form-group">
              <button
                name="submit"
                value="Send"
                type="submit"
                className="btn1 btn-success btn-lg"
                data-submit="...Sending">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
