import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let slug = this.props.match.params.slug;
    axios
      .get(`api/blog/${slug}`)
      .then(res => {
        this.setState({
          post: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const post = this.state.post ? (
      <div>
        <h1>{this.state.post.title}</h1>
      </div>
    ) : (
      <div className="text-center">Loading ...</div>
    );

    return <div className="container">{post}</div>;
  }
}

export default Post;
