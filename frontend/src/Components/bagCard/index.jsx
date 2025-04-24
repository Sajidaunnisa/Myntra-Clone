import React from "react";
import "./bagCard.css";
import { Card } from "react-bootstrap";
import { PiKeyReturn } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBagItems, removeFromBag } from "../../Store/bagSlice";

const BagCard = ({ item }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBagItems());
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(removeFromBag(id));
  };

  return (
    <div className="p-5 pb-0 item-container">
<<<<<<< HEAD:frontend/src/Components/bagCard/index.jsx
      <Card className="mb-3 bagcard" style={{ maxWidth: "600px" }}>
        <button
          className="delete-button"
          onClick={() => handleRemoveItem(item.id)}
        >
=======
      <Card
        className="mb-3 bagcard"
        style={{ maxWidth: "600px", width: "100%", height: "auto" }}
      >
        <button className="delete-button" onClick={handleRemoveItem}>
>>>>>>> 7d0db32971e551f6ea8c93da03889deae3a0cb81:src/Components/bagCard/index.jsx
          <IoMdClose />
        </button>

        <div className="row g-0">
          <div className="col-12 col-md-3">
            <Card.Img
              className="img-fluid"
              src={item.image}
              alt={item.product}
            />
          </div>
          <div className="col-12 col-md-9">
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
                <PiKeyReturn style={{ maxWidth: "22px", maxHeight: "22px" }} />
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
