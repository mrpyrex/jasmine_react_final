import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Address</h5>
          </div>
          <div className="col-md-4">
            <h5>Subscribe</h5>
          </div>
          <div className="col-md-4">
            <h5>Twitter feed</h5>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center">&copy; Jasmine Cakes and Chops. 2019</p>
    </footer>
  );
};

export default Footer;
