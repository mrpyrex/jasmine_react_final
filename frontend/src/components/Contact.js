import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addContact } from "../actions/contacts";

export class Contact extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    is_subscribed: false
  };
  static propTypes = {
    addContact: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const {
      first_name,
      last_name,
      email,
      phone,
      message,
      is_subscribed
    } = this.state;

    const newContact = {
      first_name,
      last_name,
      email,
      phone,
      message,
      is_subscribed
    };

    this.props.addContact(newContact);
  };

  onChange = e =>
    this.setState({
      [e.target.id]: e.target.value
    });

  render() {
    return (
      <div className="container mb-4">
        <div className="card">
          <h4 className="card-title display-3 text-center mt-4">Contact Us</h4>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="row form-group">
                <div className="col-md-6">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Your message"
                  rows="6"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="is_subscribed"
                  onChange={this.onChange}
                />
                <label className="form-check-label" htmlFor="is_subscribed">
                  <small>Subscribe to our newsletter?</small>
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

export default connect(
  null,
  { addContact }
)(Contact);
