import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        <Link to="/"> JC&C</Link>
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/about">
          About Us
        </Link>
        <Link className="p-2 text-dark" to="/gallery">
          Gallery
        </Link>
        <Link className="p-2 text-dark" to="/blog">
          Blog
        </Link>
        <Link className="p-2 text-dark" to="/contact">
          Contact Us
        </Link>
      </nav>
      <Link className="btn btn-outline-primary" to="/shop">
        Shop
      </Link>
    </div>
  );
};

export default Header;
