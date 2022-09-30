import React from 'react';
import Home from './pages/Home';
import ProductListing from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SellOnSassty from './pages/SellOnSassty';
import {MegaMenuProvider } from "./ContextAPI/MegaMenuContext"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MegaMenuProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductListing />} />
          <Route path="/product-details" element={<ProductDetailPage />} />
          <Route path="/sell" element={<SellOnSassty/>} />
        </Routes>
      </div>
    </Router>
    </MegaMenuProvider>
  );
}

export default App;
