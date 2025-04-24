import React from "react";
import "./sidebar.css";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const BagSidebar = () => {
  const bagItems = useSelector((state) => state.bag.items);

  let totalMRP = 0;
  let totalDiscount = 0;
  let shippingFee = 79;

  bagItems.forEach((item) => {
    const actual = Number(item.actualprice) || 0;
    const price = Number(item.price) || 0;

    totalMRP += actual;
    totalDiscount += actual - price;
  });

  const totalItems = bagItems.length;
  const finalPayment = totalMRP - totalDiscount + shippingFee;

  return (
    <div className="shopping-bag">
      <div className="price-details ps-3">
        PRICE DETAILS ({totalItems} Item{totalItems !== 1 ? "s" : ""})
      </div>

      <ListGroup variant="flush" className="details">
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <span>Total MRP</span>
            <span>₹{totalMRP}</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <span>Discount on MRP</span>
            <span style={{ color: "green" }}>-₹{totalDiscount}</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <span>Coupon Discount</span>
            <span style={{ color: "red" }}>Apply Coupon</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <span>
              Platform Fee <span className="knowmore-btn ps-1">Know More</span>
            </span>
            <span style={{ color: "green" }}>FREE</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="d-flex justify-content-between">
            <span>
              Shipping Fee <span className="knowmore-btn ps-1">Know More</span>
            </span>
            <span>₹{shippingFee}</span>
          </div>
        </ListGroup.Item>
      </ListGroup>

      <hr />

      <div className="d-flex justify-content-between mb-3 total-amount ps-3 pe-3">
        <span>Total Amount</span>
        <span>₹{finalPayment}</span>
      </div>
      <div className="d-grid ps-3 pe-3">
        <button className="btn place-order-btn" type="button">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default BagSidebar;
