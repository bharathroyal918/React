import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import biryaniImg from "../../assets/menu/biryani.svg";
import paneerImg from "../../assets/menu/paneer.svg";
import dosaImg from "../../assets/menu/dosa.svg";
import roganJoshImg from "../../assets/menu/rogan-josh.svg";
import naanImg from "../../assets/menu/naan.svg";
import jamunImg from "../../assets/menu/jamun.svg";
import "./RestaurantMenu.css";

const MENU_DATA = [
  {
    id: "m1",
    name: "Chicken Dum Biryani",
    price: 320,
    type: "non-veg",
    image: biryaniImg,
    desc: "Aromatic basmati rice cooked with tender chicken pieces and special spices.",
  },
  {
    id: "m2",
    name: "Paneer Butter Masala",
    price: 280,
    type: "veg",
    image: paneerImg,
    desc: "Soft paneer cubes cooked in a rich and creamy tomato-based gravy.",
  },
  {
    id: "m3",
    name: "Masala Dosa",
    price: 120,
    type: "veg",
    image: dosaImg,
    desc: "Crispy crepe made from fermented rice and lentil batter, filled with potato masala.",
  },
  {
    id: "m4",
    name: "Mutton Rogan Josh",
    price: 450,
    type: "non-veg",
    image: roganJoshImg,
    desc: "Classic Kashmiri dish with tender mutton cooked in aromatic spices.",
  },
  {
    id: "m5",
    name: "Garlic Naan",
    price: 60,
    type: "veg",
    image: naanImg,
    desc: "Soft and fluffy Indian bread flavored with garlic and butter.",
  },
  {
    id: "m6",
    name: "Gulab Jamun",
    price: 90,
    type: "veg",
    image: jamunImg,
    desc: "Deep-fried milk dumplings soaked in sugar syrup.",
  },
];

export default function RestaurantMenu() {
  const { id } = useParams();
  const { cart, addToCart, removeFromCart } = useAppContext();

  const getQuantity = (itemId) => {
    const item = cart.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="restaurant-menu-page">
      <div className="menu-header">
        <div className="menu-header-inner">
          <h1 className="menu-restaurant-name">Restaurant Menu ({id})</h1>
          <p className="menu-restaurant-info">
            South Indian, North Indian, Chinese • 4.3 ⭐
          </p>
        </div>
      </div>

      <div className="menu-content">
        <h2 className="menu-section-title">Recommended Items</h2>
        <div className="menu-list">
          {MENU_DATA.map((item) => {
            const qty = getQuantity(item.id);
            return (
              <div key={item.id} className="menu-item">
                <div className="menu-item-image-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-item-image"
                  />
                </div>
                <div className="menu-item-details">
                  <span className={`type-icon ${item.type}`}></span>
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-price">₹{item.price}</p>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
                <div className="menu-item-actions">
                  {qty === 0 ? (
                    <button className="add-btn" onClick={() => addToCart(item)}>
                      ADD
                    </button>
                  ) : (
                    <div className="qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      <span className="qty-text">{qty}</span>
                      <button
                        className="qty-btn"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
