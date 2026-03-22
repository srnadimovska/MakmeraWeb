import { useState, useEffect, useRef } from "react";
import logo from "../assets/makmeralogo.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => 
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          {/* DROPDOWN */}
          <div
            ref={dropdownRef}
            className={styles.dropdown}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setProductsOpen(false);
              }
            }}
          >
            <Link
              to="/products"
              className={styles.dropdownTrigger}
              onClick={() => {
                setMenuOpen(false);
                setProductsOpen(false);
              }}
            >
              PRODUCTS
              <span
                className={`${styles.arrow} ${
                  productsOpen ? styles.arrowOpen : ""
                }`}
              >
                ▾
              </span>
            </Link>

            <div
              className={`${styles.dropdownContent} ${
                productsOpen ? styles.dropdownShow : ""
              }`}
            >
              <Link to="products/retail" onClick={() => setProductsOpen(false)}>
                Retail
              </Link>
              <Link
                to="products/truckscales"
                onClick={() => setProductsOpen(false)}
              >
                Truck Scales
              </Link>
              <Link
                to="products/industrial"
                onClick={() => setProductsOpen(false)}
              >
                Industrial Solutions
              </Link>
            </div>
          </div>

          <Link to="/projects">PROJECTS</Link>
          <Link to="/service">SERVICE</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
