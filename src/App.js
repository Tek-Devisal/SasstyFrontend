import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "@mui/material";
import AppReviews from "./components/AppReviews";

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SellOnSassty from "./pages/SellOnSassty";
import Cart from "./pages/Cart";
import { MegaMenuProvider } from "./ContextAPI/MegaMenuContext";
import Listings from "./pages/Listings";
import theme from "./theme";
import Testing from "./pages/Testing";
import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "@mui/icons-material";

function App() {
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Listings/>
  //   </ThemeProvider>
  // );

  return (
    <MegaMenuProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/product-list" element={<ProductListing />} />
              <Route path="/product-details" element={<ProductDetailPage />} />
              <Route path="/sell" element={<SellOnSassty />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/listings" element={<Listings />} />
              <Route exact path="/login" element={<Register />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </MegaMenuProvider>
  );
}

export default App;
