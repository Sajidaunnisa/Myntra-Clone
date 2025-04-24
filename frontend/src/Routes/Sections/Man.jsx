import React, { useEffect } from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenItems } from "../../Store/itemsSlice";

const Man = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.menItems.items);

  useEffect(() => {
    dispatch(fetchMenItems());
  }, [dispatch]);

  return (
    <>
      <ProductCard items={items} />
    </>
  );
};

export default Man;
