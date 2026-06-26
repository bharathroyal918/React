import { useState, useRef } from "react";
import "./CategoryList.css";

const categories = [
  {
    id: 1,
    name: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Dosa",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 5,
    name: "North Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Chinese",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Ice Cream",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Idli",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Noodles",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=200&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Rolls",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=200&h=200&fit=crop&q=80",
  },
];

export default function CategoryList({ onCategorySelect }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const scrollRef = useRef(null);

  const handleCategoryClick = (category) => {
    const newActive = activeCategory === category.name ? null : category.name;
    setActiveCategory(newActive);
    if (onCategorySelect) {
      onCategorySelect(newActive);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -240, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="categories">
        <div className="categories-inner">
          <div className="categories-header">
            <h2 className="categories-title">What's on your mind?</h2>
            <div className="categories-nav">
              <button
                className="categories-nav-btn"
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                ◀
              </button>
              <button
                className="categories-nav-btn"
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                ▶
              </button>
            </div>
          </div>

          <div className="categories-scroll" ref={scrollRef}>
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`category-card ${activeCategory === cat.name ? "active" : ""}`}
                onClick={() => handleCategoryClick(cat)}
              >
                <div className="category-img-wrapper">
                  <img
                    className="category-img"
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                  />
                </div>
                <span className="category-name">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider">
        <hr />
      </div>
    </>
  );
}
