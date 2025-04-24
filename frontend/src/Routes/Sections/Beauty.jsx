import React, { useEffect } from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeautyItems } from "../../Store/itemsSlice";

const Beauty = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.beautyItems.items);

  useEffect(() => {
    dispatch(fetchBeautyItems());
  }, [dispatch]);

  return (
    <>
      <ProductCard items={items} />
    </>
  );
};

export default Beauty;
