import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "../Components/Navbar";
import Footar from "../Components/Footar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footar />
    </>
  );
}

export default App;
