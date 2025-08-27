
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import Header from './Common Pages/Header'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Resume from "./Pages/Resume";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/resume',
    element: <Resume/>
  },
  {
    path: '/projects',
    element: <Project/>,
  },
  {
    path: '/contact',
    element: <Contact/>
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>
);
