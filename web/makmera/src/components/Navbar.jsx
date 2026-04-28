import { useState, useEffect, useRef } from "react";
import logo from "../assets/makmeralogo.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [productsOpen, setProductsOpen] = useState(false);
  // const dropdownRef = useRef(null);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //       setProductsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => 
  //     document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <header
      className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ""}`}
    >
      {/* TOP ROW */}
      <div className={styles.container}>
        <div className={styles.logoDiv}>
          <Link to="/" title="Home">
            <img src={logo} alt="logo" />
          </Link>

          <input type="text" placeholder="Search your item..." />

          <div className={styles.languageButtons}>
            <button>EN</button>
            <button>MK</button>
          </div>

          {/* HAMBURGER */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
  <Link to="/products" onClick={() => setMenuOpen(false)}>
    PRODUCTS
  </Link>

  <Link to="/projects" onClick={() => setMenuOpen(false)}>
    PROJECTS
  </Link>

  <Link to="/service" onClick={() => setMenuOpen(false)}>
    SERVICE
  </Link>

  <Link to="/about" onClick={() => setMenuOpen(false)}>
    ABOUT
  </Link>

  <Link to="/contact" onClick={() => setMenuOpen(false)}>
    CONTACT
  </Link>
</nav>
      </div>
    </header>
  );
}

export default Navbar;
