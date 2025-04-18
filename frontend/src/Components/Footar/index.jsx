import React from "react";
import "./footar.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footar = () => {
  return (
    <footer className="bg-light py-4 ">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h6 className="mb-3">ONLINE SHOPPING</h6>
            <ul className="list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home & Living</li>
              <li>Beauty</li>
              <li>Gift Cards</li>
              <li>Myntra Insider</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="mb-3">CUSTOMER POLICIES</h6>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
              <li>Grievance Officer</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="mb-3">USEFUL LINKS</h6>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Whitehat</li>
              <li>Cleartrip</li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6>EXPERIENCE MYNTRA APP ON MOBILE</h6>
            <div className="d-flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                width="120"
                className="me-2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_badge_EN.svg"
                alt="App Store"
                width="120"
              />
            </div>
            <h6 className="mt-3">KEEP IN TOUCH</h6>
            <div className="d-flex">
              <a href="#" className="me-3">
                <FaFacebookSquare className="apps-icon" />
              </a>
              <a href="#" className="me-3">
                <FaTwitter className="apps-icon" />
              </a>
              <a href="#" className="me-3">
                <FaYoutube className="apps-icon" />
              </a>
              <a href="#">
                <TiSocialInstagram className="apps-icon" />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">
              <strong>100% ORIGINAL</strong> guarantee for all products at
              myntra.com
            </p>
          </div>
          <div className="col-md-6 text-end">
            <p className="mb-0">
              <strong>Return within 14 days</strong> of receiving your order
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footar;
