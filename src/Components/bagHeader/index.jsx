import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img
                src="images/myntra-logo.png"
                alt="myntra-logo"
                style={{ width: 53, height: 39 }}
              />
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a
                href="#"
                className="nav-link pb-2 link-success bag-tabs border-bottom border-success border-3"
              >
                BAG
              </a>
            </li>
            <div className="pt-1">------</div>
            <li>
              <a href="#" className="nav-link pb-3 link-secondary bag-tabs">
                ADDRESS
              </a>
            </li>
            <div className="pt-1">------</div>
            <li>
              <a href="#" className="nav-link pb-3 link-secondary bag-tabs">
                PAYMENT
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <p>100% SECURE</p>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
