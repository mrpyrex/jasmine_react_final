import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProducts } from "../../actions/shop";

export class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div className="container">
        <h1>ProductList</h1>
        <div className="row">
          {this.props.products.map(product => (
            <div className="col-md-3" key={product.slug}>
              <div className="card">
                <Link to={`/shop/${product.slug}`}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});
export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);
