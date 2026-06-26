import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import RestaurantMenu from "./pages/RestaurantMenu/RestaurantMenu";
import Cart from "./pages/Cart/Cart";
import LoginModal from "./components/LoginModal/LoginModal";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantMenu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        <LoginModal />
      </div>
    </Router>
  );
}
