// Packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { PageNotFound } from "../../Components/common/404Page";
import { Header } from "../../Views/Header";
import { Home, Signup, Login, Products, About } from "../../Pages";

/**
 * App Routes
 * @returns Routes
 */
const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export { AppRoutes };
