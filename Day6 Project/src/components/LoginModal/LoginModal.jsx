import { useAppContext } from "../../context/AppContext";
import "./LoginModal.css";

export default function LoginModal() {
  const { isLoginOpen, setIsLoginOpen } = useAppContext();

  if (!isLoginOpen) return null;

  const handleClose = (e) => {
    if (e.target.className === "modal-overlay") {
      setIsLoginOpen(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content">
        <button className="close-btn" onClick={() => setIsLoginOpen(false)}>×</button>
        <div className="modal-header">
          <h2>Login</h2>
          <p>or <a href="#">create an account</a></p>
          <div className="modal-line"></div>
        </div>
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setIsLoginOpen(false); }}>
          <input type="text" placeholder="Phone number" className="modal-input" required />
          <button type="submit" className="modal-submit">LOGIN</button>
          <p className="modal-terms">
            By clicking on Login, I accept the Terms & Conditions & Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}
