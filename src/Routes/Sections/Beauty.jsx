import React from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector } from "react-redux";

const Beauty = () => {
  const items = useSelector((store) => store.beautyItems);
  return (
    <>
      <ProductCard items={items} />
    </>
  );
};

export default Beauty;
