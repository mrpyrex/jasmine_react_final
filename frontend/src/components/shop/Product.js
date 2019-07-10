import React, { Component } from "react";
import axios from "axios";

export class Product extends Component {
  state = {
    product: null
  };
  componentDidMount() {
    let slug = this.props.match.params.slug;
    axios
      .get(`api/shop/${slug}`)
      .then(res => {
        this.setState({
          product: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const product = this.state.product ? (
      <div>
        <h1>{this.state.product.name}</h1>
      </div>
    ) : (
      <div className="text-center">Loading ...</div>
    );

    return <div className="container">{product}</div>;
  }
}

export default Product;
