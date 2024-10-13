import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-img-container ps-5 ms-5">
        <img
          className="hero-image img-fluid ms-5"
          src="images/myntra-hero.webp"
          alt="Hero"
        />
      </div>

      <div className="d-flex justify-content-center title-sponsor mt-2">
        <img
          className="sponsor-img img-fluid"
          src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/22/4f6e51f5-b9b5-445a-9945-accbe3b173be1727010032335-Sponsor-Strip_1-----1.jpg"
          alt="Sponsor 1"
        />
        <img
          className="sponsor-img img-fluid"
          src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/SEPTEMBER/24/wxMkVDFI_06e49f98f69441ea836897b7d43146a1.jpg"
          alt="Sponsor 2"
        />
      </div>

      <div className="coupon-container mt-2">
        <img
          className="coupon-img img-fluid"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/24/cea83390-89c5-42c1-b478-8e3c8a2bfac11727172802763-Coupons-CORNER.jpg"
          alt="Coupons"
        />
      </div>

      <div className="d-flex coupon-code-container">
        <img
          className="coupon-code-img img-fluid"
          src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/24/1661c88c-f9f9-49ae-9e9d-9520fc53a3ef1727173193402-MYNTRA100.jpg"
          alt="Coupon Code 100"
        />
        <img
          className="coupon-code-img img-fluid"
          src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/9/24/d8792a34-d20f-48ca-9815-b43f7024549b1727173193427-MYNTRA200.jpg"
          alt="Coupon Code 200"
        />
      </div>
    </>
  );
};

export default Hero;
