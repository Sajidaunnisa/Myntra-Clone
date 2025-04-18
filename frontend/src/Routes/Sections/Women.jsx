import React from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector } from "react-redux";

const Women = () => {
  const items = useSelector((store) => store.womenItems);
  return (
    <>
      <ProductCard items={items} />
    </>
  );
};

export default Women;
