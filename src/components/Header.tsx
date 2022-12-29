import "./Header.css";
import logoImage from "../assets/logo.png";
function Header() {
  return (
    <header className="header">
      <div className="image">
        <img src={logoImage}></img>
      </div>
    </header>
  );
}

export default Header;
