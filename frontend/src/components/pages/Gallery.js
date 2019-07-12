import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPics } from "../../actions/gallery";

export class Gallery extends Component {
  static propTypes = {
    pics: PropTypes.array.isRequired
  };
  componentDidMount() {
    this.props.getPics();
  }
  render() {
    return (
      <section className="gallery-block compact-gallery">
        <div className="container">
          <div className="heading">
            <h2 className="display-2">Our Recent Works</h2>
          </div>
          <div className="row no-gutters">
            {this.props.pics.map(pic => (
              <div
                className="col-md-6 col-lg-4 item zoom-on-hover"
                key={pic.id}
              >
                <Link to={pic.image} className="lightbox">
                  <img className="img-fluid image" src={pic.image} />
                  <span className="description">
                    <span className="description-heading">{pic.theme}</span>
                    <span className="description-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc quam urna.Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  pics: state.pics.pics
});

export default connect(
  mapStateToProps,
  { getPics }
)(Gallery);
