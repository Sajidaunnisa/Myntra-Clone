import React, { useEffect } from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchKidsItems } from "../../Store/itemsSlice";

const Kids = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.kidsItems.items);

  useEffect(() => {
    dispatch(fetchKidsItems());
  }, [dispatch]);

  return <ProductCard items={items} />;
};

export default Kids;
