import React, { Component } from "react";

export class Subscribe extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="row">
            <input
              type="text"
              className="form-control"
              id="subscribe"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Subscribe;
