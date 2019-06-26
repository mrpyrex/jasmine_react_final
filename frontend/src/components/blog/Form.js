import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../actions/posts";

export class Form extends Component {
  state = {
    title: "",
    content: "",
    thumb: null
  };

  onSubmit = e => {
    e.preventDefault();

    let newPost = new FormData();
    newPost.append("thumb", this.state.thumb, this.state.thumb.name);
    newPost.append("title", this.state.title);
    newPost.append("content", this.state.content);
    this.props.addPost(newPost);
  };

  onChange = e =>
    this.setState({
      [e.target.id]: e.target.value
    });

  handleImage = e =>
    this.setState({
      thumb: e.target.files[0]
    });
  render() {
    return (
      <div className="container mb-4">
        <div className="card">
          <h4 className="card-title text-center mt-4">Add A Post</h4>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter title"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="content"
                  placeholder="Enter content"
                  onChange={this.onChange}
                />
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="thumb"
                  onChange={this.handleImage}
                />
                <label className="custom-file-label" htmlFor="thumb">
                  Choose file
                </label>
              </div>
              <button className="btn btn-primary mt-4">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});
export default connect(
  mapStateToProps,
  { addPost }
)(Form);
