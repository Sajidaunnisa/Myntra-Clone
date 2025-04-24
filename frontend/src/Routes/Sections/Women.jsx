import React, { useEffect } from "react";
import ProductCard from "../../Components/productsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchWomenItems } from "../../Store/itemsSlice";

const Women = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.womenItems.items);

  useEffect(() => {
    dispatch(fetchWomenItems());
  }, [dispatch]);

  return <ProductCard items={items} />;
};

export default Women;
