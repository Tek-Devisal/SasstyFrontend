import React from 'react';
import Home from './pages/Home';
import ProductListing from './pages/ProductListPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
