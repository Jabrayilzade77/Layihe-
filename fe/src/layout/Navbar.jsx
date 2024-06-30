import { Link } from "react-router-dom";
import "../layout/Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [isNavbarExits, setisNavbarExits] = useState(false);

  function HamburgerIsExits() {
    setisNavbarExits(!isNavbarExits);
  }

  return (
    <div className="navbar_container">
      <div className="up_side_navbar">
        <p>
          Destek: <span className="telefon">(050) - 596 - 60 - 76</span>
        </p>
        <Link to={"/yardim"} className="yardim">
          Help
        </Link>
        
        <Link to={"/wishList"} className="wishlist">
          <i className="fa-solid fa-heart"></i> WishList
        </Link>
        <Link to={"/register"} className="giris">
          <i className="fa-solid fa-user"></i> Log In
        </Link>

       <div className="diller">
       <button>Az</button>
        <button>Eng</button>
        <button>Ru</button>
       </div>

      </div>
      <div className="navbar_list_container">
        <Link to={"/"}>
          <h2>CarHaven</h2>
        </Link>
        <div className={`navbar_list ${isNavbarExits ? "active" : ""}`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/all"}>All Advertisement</Link>
          <Link to={"/moto"}>Moto</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/new"}>
            <button className="new_btn">
              <i className="fa-solid fa-plus"></i>  New 
            </button>
          </Link>
        </div>
        <i className={`fa-solid fa-bars ${isNavbarExits ? "active" : ""}`} onClick={HamburgerIsExits}></i>
      </div>
    </div>
  );
}

export default Navbar;
