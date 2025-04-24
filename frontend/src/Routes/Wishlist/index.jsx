import React, { useEffect } from "react";
import "./wishlist.css";
import { useSelector, useDispatch } from "react-redux";
import WishlistCard from "../../Components/wishlistCard";
import { fetchWishlistItems } from "../../Store/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishlistItems());
  }, [dispatch]);

  const wishlistItems = useSelector((store) => store.wishlist.items);

  if (!wishlistItems || wishlistItems.length === 0) {
    return <div className="p-5 m-5 text-center">Your wishlist is empty.</div>;
  }

  return (
    <div className="p-5" id="wishlist">
      <div className="pt-5 pb-3">
        <span className="wishlist-heading">My Wishlist</span>
        <span className="number-of-items ps-2">
          {wishlistItems.length} items
        </span>
      </div>
      <div className="row">
        {wishlistItems.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
