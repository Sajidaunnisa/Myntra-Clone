import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./Routes/Bag/index.jsx";
import Wishlist from "./Routes/Wishlist/index.jsx";
import Home from "./Routes/Home/index.jsx";
import Man from "./Routes/Sections/Man.jsx";
import Women from "./Routes/Sections/Women.jsx";
import Kids from "./Routes/Sections/Kids.jsx";
import HomeandLiving from "./Routes/Sections/Home&Living.jsx";
import Beauty from "./Routes/Sections/Beauty.jsx";
import { Provider } from "react-redux";
import myntraStore from "./Store/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/men", element: <Man /> },
      { path: "/women", element: <Women /> },
      { path: "/kids", element: <Kids /> },
      { path: "/beauty", element: <Beauty /> },
      { path: "/home&living", element: <HomeandLiving /> },
      { path: "/home", element: <Home /> },
    ],
  },
  {
    path: "/bag",
    element: <Bag />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
