import React from "react";
import "./ProductCard.css";
import { Card } from "react-bootstrap";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../Store/wishlistSlice";

const ProductCard = ({ items = [] }) => {
  const itemsArray = Array.isArray(items) ? items : [];
  const dispatch = useDispatch();
  const wishlistItems = useSelector((store) => store.wishlist.items || []);

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="card-group mt-5 pt-5">
      <div className="product-card-container row ms-3 me-2">
        {itemsArray.map((item) => {
          const inWishlist = isInWishlist(item.id);
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <Card style={{ width: "16rem" }} className="mb-3">
                <Card.Img variant="top" src={item.image} alt={item.product} />
                <Card.Body>
                  <div className="product-title">
                    <Card.Title>
                      <h5 className="brand">{item.brand}</h5>
                    </Card.Title>

                    <Card.Text className="product-name">
                      {item.product}
                    </Card.Text>
                    {inWishlist ? (
                      <button
                        className="remove-wishlist-btn"
                        onClick={() => handleRemoveFromWishlist(item.id)}
                      >
                        <IoMdHeartEmpty
                          style={{
                            width: "20px",
                            height: "20px",
                            color: "red",
                          }}
                          className="me-1"
                        />
                        Wishlisted
                      </button>
                    ) : (
                      <button
                        className="wishlist-btn-container"
                        onClick={() => handleAddToWishlist(item)}
                      >
                        <IoMdHeartEmpty
                          style={{ width: "20px", height: "20px" }}
                          className="me-1"
                        />
                        Wishlist
                      </button>
                    )}
                  </div>

                  <div className="d-flex align-items-center details">
                    <span className="total-price">Rs. {item.price}</span>
                    <span className="text-muted actualprice ms-2">
                      Rs. {item.actualprice}
                    </span>
                    <span className="total-discount text-danger ms-2">
                      ({item.discount}% OFF)
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
