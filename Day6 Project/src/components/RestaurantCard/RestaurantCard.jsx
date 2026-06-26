import { useState } from "react";
import { Link } from "react-router-dom";
import "./RestaurantCard.css";

export default function RestaurantCard({
  id,
  image,
  name,
  rating,
  deliveryTime,
  cuisines,
  priceRange,
  location,
  offer,
  type,
  promoted,
}) {
  const [liked, setLiked] = useState(false);

  const getRatingClass = () => {
    if (rating >= 4.0) return "high";
    if (rating >= 3.5) return "medium";
    return "low";
  };

  const getTypeLabel = () => {
    switch (type) {
      case "veg":
        return { label: "Pure Veg", className: "veg" };
      case "nonveg":
        return { label: "Non-Veg", className: "nonveg" };
      default:
        return { label: "Veg & Non-Veg", className: "both" };
    }
  };

  const typeInfo = getTypeLabel();

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-card" style={{ textDecoration: 'none', display: 'block' }}>
      {/* Image */}
      <div className="restaurant-card-img-wrapper">
        <img
          className="restaurant-card-img"
          src={image}
          alt={name}
          loading="lazy"
        />
        <div className="restaurant-card-img-gradient"></div>

        {/* Offer text at bottom-left */}
        {offer && (
          <span className="restaurant-card-offer">{offer}</span>
        )}

        {/* Type badge */}
        <span className={`restaurant-card-type ${typeInfo.className}`}>
          <span className={`type-dot ${typeInfo.className}`}></span>
          {typeInfo.label}
        </span>

        {/* Promoted badge */}
        {promoted && (
          <span className="restaurant-card-promoted">Ad</span>
        )}

        {/* Favourite */}
        <button
          className={`restaurant-card-fav ${liked ? "liked" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLiked(!liked);
          }}
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="restaurant-card-body">
        <div className="restaurant-card-name-row">
          <h3 className="restaurant-card-name">{name}</h3>
        </div>

        <div className="restaurant-card-meta">
          <span className={`restaurant-card-rating ${getRatingClass()}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {rating}
          </span>
          <span className="restaurant-card-dot">•</span>
          <span className="restaurant-card-time">{deliveryTime}</span>
          <span className="restaurant-card-dot">•</span>
          <span className="restaurant-card-price">{priceRange}</span>
        </div>

        <p className="restaurant-card-cuisines">{cuisines.join(", ")}</p>

        <p className="restaurant-card-location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location}
        </p>
      </div>
    </Link>
  );
}
