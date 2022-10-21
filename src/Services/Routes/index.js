// Packages
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Components
import { PageNotFound } from "../../Components/common/404Page";
import { Header } from "../../Views/Header";
import { Home, Signup, Login, Products, About } from "../../Pages";

// Helper
import { nProgressConfiguration } from "../Helper";

/**
 * App Routes
 * @returns Routes
 */
const AppRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    nProgressConfiguration();
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export { AppRoutes };
