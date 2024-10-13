import React from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector } from "react-redux";

const HomeandLiving = () => {
  const items = useSelector((store) => store.homeLivingItems);
  return (
    <>
      <ProductCard items={items} />
    </>
  );
};

export default HomeandLiving;
