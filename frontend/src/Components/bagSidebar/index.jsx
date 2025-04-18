import React from "react";
import "./sidebar.css";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const BagSidebar = () => {
  const bagItems = useSelector((state) => state.bag);
  const categories = useSelector((state) => ({
    womenItems: state.womenItems,
    menItems: state.menItems,
    kidsItems: state.kidsItems,
    homeLivingItems: state.homeLivingItems,
    beautyItems: state.beautyItems,
  }));

  let totalMRP = 0;
  let totalDiscount = 0;
  let shoppingFee = 79;

  const finalItems = Object.values(categories)
    .flat()
    .filter((item) => {
      if (bagItems.includes(item.id)) {
        totalMRP += Number(item.actualprice) || 0;
        totalDiscount += Number(item.actualprice - item.price) || 0;

        return true;
      }
      return false;
    });

  let totalItem = bagItems.length;
  let finalPayment = Number(totalMRP) - Number(totalDiscount) + shoppingFee;

  return (
    <div className="shopping-bag">
      <div className="price-details ps-3">
        PRICE DETAILS ({totalItem} Items)
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
            <span>₹{shoppingFee}</span>
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
