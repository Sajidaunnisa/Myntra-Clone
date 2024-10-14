import React from "react";
import Hero from "../../Components/hero";
import Categories from "../../Components/Categories";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.homeItems);

  return (
    <>
      <Hero />
      <Categories item={items} />
    </>
  );
};

export default Home;
