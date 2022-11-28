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
import { UserProvider } from "./ContextAPI/UserContext";
import Listings from "./pages/Listings";
import theme from "./theme";
import Testing from "./pages/Testing";
import Register from "./pages/Register";
import SellLandingPage from "./components/SellLandingPage";
import VendorDetails from "./pages/VendorDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "@mui/icons-material";
import ScrollToTop from "./components/ScrollToTop";
import Registration from "./pages/Registration";

function App() {
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Listings/>
  //   </ThemeProvider>
  // );

  return (
    <MegaMenuProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <ScrollToTop>
            <div className="App">
              <Routes>
                <Route path="/product-list" element={<ProductListing />} />
                <Route path="/product-details" element={<ProductDetailPage />} />
                <Route path="/sell" element={<SellOnSassty />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/landing" element={<SellLandingPage />} />
                {/* <Route path="/listings" element={<Listings />} /> */}
                <Route path="/listings" element={<VendorDetails />} />
                <Route exact path="/login" element={<Registration />} />
                <Route exact path="/" element={<Home />} />
              </Routes>
            </div>
            </ScrollToTop> 
          </Router>
        </ThemeProvider>
      </UserProvider>
    </MegaMenuProvider>
  );
}

export default App;
