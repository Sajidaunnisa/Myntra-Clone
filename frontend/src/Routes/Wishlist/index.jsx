import React from "react";
import "./wishlist.css";
import { useSelector } from "react-redux";
import WishlistCard from "../../Components/wishlistCard";

const Wishlist = () => {
  const wishlistItems = useSelector((store) => store.wishlist.wishlist);
  const womenItems = useSelector((state) => state.womenItems);
  const menItems = useSelector((state) => state.menItems);
  const kidsItems = useSelector((state) => state.kidsItems);
  const homeLivingItems = useSelector((state) => state.homeLivingItems);
  const beautyItems = useSelector((state) => state.beautyItems);

  if (!wishlistItems || wishlistItems.length === 0) {
    return <div className="p-5 m-5 text-center">Your wishlist is empty.</div>;
  }

  const finalItems1 = kidsItems.filter((item) =>
    wishlistItems.includes(item.id)
  );
  const finalItems2 = womenItems.filter((item) =>
    wishlistItems.includes(item.id)
  );
  const finalItems3 = menItems.filter((item) =>
    wishlistItems.includes(item.id)
  );
  const finalItems4 = beautyItems.filter((item) =>
    wishlistItems.includes(item.id)
  );
  const finalItems5 = homeLivingItems.filter((item) =>
    wishlistItems.includes(item.id)
  );

  const allWishlistedItems = [
    ...finalItems1,
    ...finalItems2,
    ...finalItems3,
    ...finalItems4,
    ...finalItems5,
  ];

  return (
    <div className="p-5" id="wishlist">
      <div className="pt-5 pb-3">
        <span className="wishlist-heading">My Wishlist</span>
        <span className="number-of-items ps-2">
          {allWishlistedItems.length} items
        </span>
      </div>
      <div className="row">
        {allWishlistedItems.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
