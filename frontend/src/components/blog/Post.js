import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let slug = this.props.match.params.slug;
    axios.get(`api/blog/${slug}`).then(res => {
      this.setState({
        post: res.data
      });
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.slug}</h1>
      </div>
    );
  }
}

export default Post;
