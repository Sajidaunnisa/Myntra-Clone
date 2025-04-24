import React, { useEffect } from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomeLivingItems } from "../../Store/itemsSlice";

const HomeandLiving = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.homeLivingItems.items);

  useEffect(() => {
    dispatch(fetchHomeLivingItems());
  }, [dispatch]);

  return <ProductCard items={items} />;
};

export default HomeandLiving;
