import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Footer from "../layout/Footer";
import Main from "../layout/Main";
import Navbar from "../components/NavBar";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";


const HeaderFooterLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Main style={{ flex: 1 }}>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default HeaderFooterLayout

export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <ErrorPageNotFound />,
        children: [
          {
            path: "/",
            element: <HomePage />
          },
          {
            path: "/flat",
            element: <ApartmentPage />
          },
          {
            path: "/about",
            element: <About />
          }
        ]
    }
]);