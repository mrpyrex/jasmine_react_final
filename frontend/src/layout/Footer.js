import React from "react";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="row">
              <div className="col-sm-12">
                <p>14, Ring Road Idua, Eket, Akwa Ibom State</p>
                <p>
                  <i class="fas fa-phone" /> +234 7080 230 375
                </p>
                <p>
                  <i class="fas fa-envelope-open-text" />{" "}
                  info@jasminecakesandchops.com
                </p>
                <p>
                  <i class="fab fa-facebook-square" />
                  <i class="fab fa-instagram" />
                  <i class="fab fa-twitter" />
                  <i class="fab fa-pinterest-p" />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-sm-12">
                <Subscribe />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <a
              class="twitter-timeline"
              data-width="400"
              data-height="400"
              data-theme="dark"
              data-link-color="#E81C4F"
              href="https://twitter.com/neupytech?ref_src=twsrc%5Etfw"
              // data-tweet-limit="5"
            >
              Tweets by neupytech
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center">&copy; Jasmine Cakes and Chops. 2019</p>
    </footer>
  );
};

export default Footer;
