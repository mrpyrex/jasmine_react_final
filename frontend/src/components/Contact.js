import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div className="container mb-4">
        <div className="card">
          <h4 className="card-title text-center mt-4">Contact Us</h4>
          <div className="card-body">
            <form>
              <div className="row form-group">
                <div className="col-md-6">
                  <label htmlFor="title">First Name</label>
                  <input type="text" className="form-control" id="first_name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="title">Last Name</label>
                  <input type="text" className="form-control" id="last_name" />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-6">
                  <label htmlFor="title">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="first_name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="title">Phone</label>
                  <input type="tel" className="form-control" id="last_name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="content">Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="content"
                  placeholder="Your message"
                  rows="6"
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Subscribe to our newsletter?
                </label>
              </div>
              <hr />
              <button className="btn btn-primary mt-4">
                <i className="far fa-paper-plane px-2" />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
