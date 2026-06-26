import { useState, useMemo } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useAppContext } from "../../context/AppContext";
import "./RestaurantList.css";

const allRestaurants = [
  {
    id: 1,
    name: "Hyderabadi Biryani House",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop&q=80",
    rating: 4.5,
    deliveryTime: "25-30 min",
    cuisines: ["Biryani", "Hyderabadi", "North Indian"],
    priceRange: "₹300 for two",
    location: "Jubilee Hills",
    offer: "60% OFF up to ₹120",
    type: "both",
    promoted: true,
    tags: ["Biryani", "North Indian", "Dinner", "Lunch"],
  },
  {
    id: 2,
    name: "South Indian Tiffins",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop&q=80",
    rating: 4.3,
    deliveryTime: "20-25 min",
    cuisines: ["Dosa", "Idli", "South Indian", "Tiffins"],
    priceRange: "₹150 for two",
    location: "Madhapur",
    offer: "₹50 OFF above ₹199",
    type: "veg",
    promoted: false,
    tags: ["Dosa", "Idli", "Tiffins", "Breakfast"],
  },
  {
    id: 3,
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&q=80",
    rating: 4.1,
    deliveryTime: "30-35 min",
    cuisines: ["Pizza", "Italian", "Pasta"],
    priceRange: "₹400 for two",
    location: "Banjara Hills",
    offer: "FREE DELIVERY",
    type: "both",
    promoted: false,
    tags: ["Pizza", "Dinner", "Lunch"],
  },
  {
    id: 4,
    name: "Burger Nation",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&q=80",
    rating: 4.2,
    deliveryTime: "15-20 min",
    cuisines: ["Burger", "American", "Fast Food"],
    priceRange: "₹250 for two",
    location: "Gachibowli",
    offer: "Buy 1 Get 1 FREE",
    type: "nonveg",
    promoted: true,
    tags: ["Burger", "Lunch", "Dinner"],
  },
  {
    id: 5,
    name: "Tandoori Nights",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&q=80",
    rating: 4.6,
    deliveryTime: "35-40 min",
    cuisines: ["North Indian", "Mughlai", "Tandoor"],
    priceRange: "₹500 for two",
    location: "Begumpet",
    offer: "20% OFF on all orders",
    type: "nonveg",
    promoted: false,
    tags: ["North Indian", "Dinner"],
  },
  {
    id: 6,
    name: "Dragon Wok",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop&q=80",
    rating: 3.9,
    deliveryTime: "25-30 min",
    cuisines: ["Chinese", "Thai", "Asian"],
    priceRange: "₹350 for two",
    location: "Kondapur",
    offer: "Flat ₹75 OFF",
    type: "both",
    promoted: false,
    tags: ["Chinese", "Noodles", "Fried Rice", "Dinner", "Lunch"],
  },
  {
    id: 7,
    name: "Frosty Scoops",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop&q=80",
    rating: 4.7,
    deliveryTime: "15-20 min",
    cuisines: ["Ice Cream", "Desserts", "Shakes"],
    priceRange: "₹200 for two",
    location: "Hitech City",
    offer: "₹30 OFF above ₹149",
    type: "veg",
    promoted: true,
    tags: ["Ice Cream", "Desserts"],
  },
  {
    id: 8,
    name: "The Cake Studio",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80",
    rating: 4.4,
    deliveryTime: "30-40 min",
    cuisines: ["Cakes", "Pastries", "Bakery"],
    priceRange: "₹450 for two",
    location: "Ameerpet",
    offer: "Flat 15% OFF",
    type: "veg",
    promoted: false,
    tags: ["Cakes", "Desserts"],
  },
  {
    id: 9,
    name: "Meghana Foods",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=300&fit=crop&q=80",
    rating: 4.8,
    deliveryTime: "20-30 min",
    cuisines: ["Biryani", "Andhra", "South Indian"],
    priceRange: "₹350 for two",
    location: "Kukatpally",
    offer: "40% OFF up to ₹80",
    type: "nonveg",
    promoted: true,
    tags: ["Biryani", "Lunch", "Dinner"],
  },
  {
    id: 10,
    name: "Noodle Bar Express",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop&q=80",
    rating: 3.8,
    deliveryTime: "20-25 min",
    cuisines: ["Noodles", "Chinese", "Pan-Asian"],
    priceRange: "₹250 for two",
    location: "Miyapur",
    offer: "FREE DELIVERY",
    type: "both",
    promoted: false,
    tags: ["Noodles", "Chinese", "Lunch"],
  },
  {
    id: 11,
    name: "Roll Junction",
    image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop&q=80",
    rating: 4.0,
    deliveryTime: "15-20 min",
    cuisines: ["Rolls", "Wraps", "Fast Food"],
    priceRange: "₹180 for two",
    location: "Dilsukhnagar",
    offer: "50% OFF up to ₹100",
    type: "nonveg",
    promoted: false,
    tags: ["Rolls", "Lunch", "Dinner"],
  },
  {
    id: 12,
    name: "Green Leaf Kitchen",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&q=80",
    rating: 4.3,
    deliveryTime: "25-35 min",
    cuisines: ["Healthy", "Salads", "Vegan"],
    priceRange: "₹300 for two",
    location: "Manikonda",
    offer: "₹40 OFF above ₹199",
    type: "veg",
    promoted: false,
    tags: ["Healthy", "Lunch", "Dinner"],
  },
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "rating", label: "Rating 4.0+" },
  { id: "fast", label: "Fast Delivery" },
  { id: "veg", label: "Pure Veg" },
  { id: "nonveg", label: "Non-Veg" },
  { id: "offers", label: "Offers" },
];

export default function RestaurantList({ selectedCategory }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const { searchQuery } = useAppContext();

  const filteredRestaurants = useMemo(() => {
    let results = allRestaurants;

    // Filter by selected category from "What's on your mind?"
    if (selectedCategory) {
      results = results.filter((r) =>
        r.tags.some(
          (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }

    if (searchQuery) {
      results = results.filter((r) =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.cuisines.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply filter buttons
    switch (activeFilter) {
      case "rating":
        results = results.filter((r) => r.rating >= 4.0);
        break;
      case "fast":
        results = results.filter((r) => {
          const time = parseInt(r.deliveryTime);
          return time <= 20;
        });
        break;
      case "veg":
        results = results.filter((r) => r.type === "veg");
        break;
      case "nonveg":
        results = results.filter((r) => r.type === "nonveg");
        break;
      case "offers":
        results = results.filter((r) => r.offer);
        break;
      default:
        break;
    }

    return results;
  }, [activeFilter, selectedCategory, searchQuery]);

  return (
    <section className="restaurants">
      <div className="restaurants-inner">
        <div className="restaurants-header">
          <h2 className="restaurants-title">
            {selectedCategory
              ? `Best ${selectedCategory} Restaurants`
              : "Top Restaurants Near You"}
          </h2>

          <div className="restaurants-filters">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="restaurants-grid">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                image={restaurant.image}
                name={restaurant.name}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                cuisines={restaurant.cuisines}
                priceRange={restaurant.priceRange}
                location={restaurant.location}
                offer={restaurant.offer}
                type={restaurant.type}
                promoted={restaurant.promoted}
              />
            ))
          ) : (
            <div className="restaurants-empty">
              <div className="restaurants-empty-icon">🍽️</div>
              <h3 className="restaurants-empty-title">No restaurants found</h3>
              <p className="restaurants-empty-text">
                Try changing the filter or exploring a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
