import React from "react";
import Header from "../../Components/bagHeader";
import BagCard from "../../Components/bagCard";
import BagSidebar from "../../Components/bagSidebar";
import { CiBookmark } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";

import "./bag.css";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag.items);
  const womenItems = useSelector((state) => state.womenItems);
  const menItems = useSelector((state) => state.menItems);
  const kidsItems = useSelector((state) => state.kidsItems);
  const homeLivingItems = useSelector((state) => state.homeLivingItems);
  const beautyItems = useSelector((state) => state.beautyItems);

  const validKidsItems = Array.isArray(kidsItems) ? kidsItems : [];
  const validWomenItems = Array.isArray(womenItems) ? womenItems : [];
  const validMenItems = Array.isArray(menItems) ? menItems : [];
  const validHomeLivingItems = Array.isArray(homeLivingItems)
    ? homeLivingItems
    : [];
  const validBeautyItems = Array.isArray(beautyItems) ? beautyItems : [];

  const allItems = [
    ...validKidsItems,
    ...validWomenItems,
    ...validMenItems,
    ...validHomeLivingItems,
    ...validBeautyItems,
  ];

  const finalItems = bagItems.map(
    (bagItem) => allItems.find((item) => item.id === bagItem.id) || bagItem
  );

  return (
    <div>
      <Header />
      <div className="row ps-4 pe-5 border-top">
        <div className="col-8">
          <div className="d-flex justify-content-between align-items-center mb-2 p-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label
                className="form-check-label fw-bold"
                htmlFor="flexCheckChecked"
              >
                1/1 ITEMS SELECTED
              </label>
            </div>

            <div className="d-flex">
              <div className="pe-3">
                <button className="btn move-remove-btn">REMOVE</button>
              </div>
              <div className="border-start ps-3">
                <button className="btn move-remove-btn">
                  MOVE TO WISHLIST
                </button>
              </div>
            </div>
          </div>
          {bagItems.length > 0 ? (
            bagItems.map((item) => <BagCard key={item.id} item={item} />)
          ) : (
            <div className="text-center p-5">Your bag is empty.</div>
          )}

          <div className="add-more-btn d-flex m-5">
            <CiBookmark
              style={{ width: "22px", height: "22px" }}
              className="me-2"
            />
            <a href="wishlist">Add More From Wishlist</a>
            <FaAngleRight
              style={{ width: "16px", height: "16px" }}
              className="ms-auto"
            />
          </div>
        </div>
        <div className="col-4 border-start">
          <BagSidebar />
        </div>
      </div>
    </div>
  );
};

export default Bag;
