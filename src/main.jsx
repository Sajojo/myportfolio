import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "typeface-rubik";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Warm from "./Warm.jsx";
import App from "./App.jsx";
import NotFoundPage from "./notfoundpage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Warm /> },
  { path: "/home", element: <App /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
