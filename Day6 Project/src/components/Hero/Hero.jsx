import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Now Delivering Near You</span>
          </div>

          <h1 className="hero-title">
            Delicious Food,
            <br />
            Delivered <span className="highlight">Fast.</span>
          </h1>

          <p className="hero-subtitle">
            From mouthwatering biryanis to crispy dosas, explore the best
            restaurants around you. Order breakfast, lunch, or dinner — your
            craving, our mission.
          </p>

          <div className="hero-actions">
            <button className="hero-btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Explore Restaurants
            </button>
            <button className="hero-btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              How It Works
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">500+</span>
              <span className="hero-stat-label">Restaurants</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-value">10K+</span>
              <span className="hero-stat-label">Happy Customers</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-value">30 min</span>
              <span className="hero-stat-label">Avg Delivery</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=640&h=520&fit=crop&q=80"
            alt="Delicious food spread"
          />

          {/* Floating Cards */}
          <div className="hero-image-float delivery">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FC8019" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div className="hero-float-text">
              <span className="hero-float-value">25 min</span>
              <span className="hero-float-label">Fast Delivery</span>
            </div>
          </div>

          <div className="hero-image-float rating">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#F5A623" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <div className="hero-float-text">
              <span className="hero-float-value">4.8 Rating</span>
              <span className="hero-float-label">Top Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
