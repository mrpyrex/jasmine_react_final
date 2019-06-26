import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div className="container mb-4">
        <div className="card">
          <h4 className="card-title text-center mt-4">Add A Post</h4>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="content"
                  placeholder="Enter content"
                />
              </div>
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="thumb" />
                <label className="custom-file-label" htmlFor="thumb">
                  Choose file
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
