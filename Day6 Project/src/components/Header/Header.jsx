import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./Header.css";
import logoImg from "../../assets/logo.jpg";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { cart, cartCount, setIsLoginOpen, searchQuery, setSearchQuery } =
    useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="header-logo">
          <div className="header-logo-icon">
            <img
              src={logoImg}
              alt="Lucky Restaurant logo"
              className="header-logo-image"
            />
          </div>
          <div className="header-logo-text">
            <span className="header-logo-name">Lucky Restaurant</span>
            <span className="header-logo-tagline">Taste the Luck</span>
          </div>
        </Link>

        {/* Search */}
        <div className="header-search">
          <svg
            className="header-search-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="header-search-input"
            placeholder='Search for "Biryani", "Dosa", "Pizza"...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Nav */}
        <nav className="header-nav">
          <a href="#" className="header-nav-link">
            <svg
              className="nav-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            <span>Offers</span>
          </a>
          <a href="#" className="header-nav-link">
            <svg
              className="nav-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>Help</span>
          </a>
          <button
            className="header-nav-link"
            onClick={() => setIsLoginOpen(true)}
          >
            <svg
              className="nav-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Sign In</span>
          </button>
          <button className="header-cart" onClick={() => navigate("/cart")}>
            <svg
              className="cart-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="header-cart-label">Cart</span>
            {cartCount > 0 && (
              <>
                <span className="cart-badge">{cartCount}</span>
                <span className="cart-summary">
                  {cartCount} item{cartCount === 1 ? "" : "s"}
                </span>
              </>
            )}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="header-menu-toggle" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
