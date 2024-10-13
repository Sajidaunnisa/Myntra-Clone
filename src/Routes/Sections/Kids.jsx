import React from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector } from "react-redux";

const Kids = () => {
  const items = useSelector((store) => store.kidsItems);
  return (
    <>
      <ProductCard items={items} />
    </>
  );
};

export default Kids;
