import React, { useEffect } from "react";
import Hero from "../../Components/hero";
import Categories from "../../Components/Categories";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomeItems } from "../../Store/itemsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.homeItems.items);

  useEffect(() => {
    dispatch(fetchHomeItems());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Categories item={items} />
    </>
  );
};

export default Home;
