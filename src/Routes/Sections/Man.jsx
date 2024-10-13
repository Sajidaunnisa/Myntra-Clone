import React from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector } from "react-redux";

const Man = () => {
  const items = useSelector((store) => store.menItems);
  return (
    <>
      <ProductCard items={items} />
    </>
  );
};

export default Man;
