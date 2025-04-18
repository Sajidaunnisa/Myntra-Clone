import React from "react";
import "./bagCard.css";
import { Card } from "react-bootstrap";
import { PiKeyReturn } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { bagActions } from "../../Store/bagSlice";

const BagCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="p-5 pb-0 item-container">
      <Card className="mb-3 bagcard" style={{ maxWidth: "600px" }}>
        <button className="delete-button" onClick={handleRemoveItem}>
          <IoMdClose />
        </button>

        <div className="row no-gutters">
          <div className="col-md-3">
            <Card.Img src={item.image} alt={item.product} />
          </div>
          <div className="col-md-9">
            <Card.Body>
              <Card.Title className="title">{item.brand}</Card.Title>
              <Card.Text className="item-details">{item.product}</Card.Text>
              <div>
                <div className="d-flex mb-2">
                  <button className="btn size-qty-btn">
                    Size: S <FaCaretDown />
                  </button>
                  <button className="btn size-qty-btn">
                    Qty: 1 <FaCaretDown />
                  </button>
                </div>
                <div>
                  <span className="total-price">₹{item.price}</span>
                  <span
                    className="text-muted ps-2"
                    style={{ textDecoration: "line-through", fontSize: "14px" }}
                  >
                    ₹{item.actualprice}
                  </span>
                  <span className="text-danger total-discount ps-2">
                    {item.discount}% OFF
                  </span>
                </div>
              </div>
              <div className="return-details mt-2">
                <PiKeyReturn style={{ width: "22px", height: "22px" }} />
                <strong>14 days</strong> return available
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BagCard;
