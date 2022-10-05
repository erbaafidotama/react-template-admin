import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Root from "./routes/root";
import Contact from "./routes/contact";
import ErrorPage from "./error-page";
import WargaIndex from "./routes/Warga/index"
import LoginIndex from "./routes/Login/index"

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
