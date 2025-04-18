import React from "react";
import { useDispatch } from "react-redux";
import { bagActions } from "../../Store/bagSlice";
import { IoMdClose } from "react-icons/io";
import "./wishlistCard.css";
import { wishlistActions } from "../../Store/wishlistSlice";

const WishlistCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemoveItem = () => {
    dispatch(wishlistActions.removeFromWishlist(item.id));
  };

  return (
    <div className="col-sm-3">
      <div className="card wishlist-card">
        <button className="delete-button" onClick={handleRemoveItem}>
          <IoMdClose />
        </button>

        <img
          src={item.image}
          className="card-img-top wishlist-card-img"
          alt={item.product}
        />
        <div className="card-body p-3 border-bottom">
          <p className="card-title product-name m-0">{item.product}</p>
          <div className="card-text d-flex align-content-center">
            <div className="price">Rs. {item.price}</div>
            <div className="actualprice p-1">Rs. {item.actualprice}</div>
            <div className="discount p-1">{item.discount}% OFF</div>
          </div>
        </div>
        <div className="card-body text-center pt-2">
          <button
            className="card-link move-to-bag-btn"
            onClick={handleAddToBag}
          >
            MOVE TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
