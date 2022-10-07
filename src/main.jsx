import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Root from "./routes/root";
import Contact from "./routes/contact";
import ErrorPage from "./error-page";
import WargaIndex from "./routes/Warga/index";
import LoginIndex from "./routes/Login/index";
import HomeIndex from "./routes/Home/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoginIndex />,
      },
      {
        path: "home",
        element: <HomeIndex />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "warga",
        element: <WargaIndex />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
