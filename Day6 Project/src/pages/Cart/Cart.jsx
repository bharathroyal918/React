import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./Cart.css";

export default function Cart() {
  const { cart, addToCart, removeFromCart, getCartTotal } = useAppContext();
  const total = getCartTotal();

  return (
    <div className="cart-page">
      <div className="cart-page-inner">
        <div className="cart-header">
          <div>
            <p className="cart-eyebrow">Your Order</p>
            <h1 className="cart-title">Cart</h1>
          </div>
          <Link to="/" className="back-link">
            Continue Shopping
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Add some delicious dishes from the menu to see them here.</p>
            <Link to="/" className="primary-btn">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>₹{item.price} each</p>
                  </div>

                  <div className="cart-item-actions">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary-card">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Items</span>
                <span>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button type="button" className="primary-btn full-width">
                Checkout
              </button>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
