import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/Cartcontext";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/menu" element={<Menu />} />
        
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;