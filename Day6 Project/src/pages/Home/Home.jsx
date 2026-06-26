import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import CategoryList from "../../components/CategoryList/CategoryList";
import RestaurantList from "../../components/RestaurantList/RestaurantList";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="home-page">
      <Hero />
      <CategoryList onCategorySelect={setSelectedCategory} />
      <RestaurantList selectedCategory={selectedCategory} />
    </div>
  );
}
