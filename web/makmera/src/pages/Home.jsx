import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import heroImg from "../assets/kamionskaHome.jpg";
import manufacturing from "../assets/manufacturing.jpg";
import laboratory from "../assets/laboratory.jpg";
import medical from "../assets/medical.jpg";
import agriculture from "../assets/agriculture.jpg";
import grocery from "../assets/grocery.jpg";
import pharmaceutical from "../assets/pharmaceutical.jpg";
import energy from "../assets/energy.jpg";
import waste from "../assets/waste.jpg";
import steel from "../assets/steel.jpg";

function Home() {
  return (
    <div className={styles.home}>

      {/* HERO */}
      <section
  className={styles.hero}
  style={{ backgroundImage: `url(${manufacturing})` }}
>
  <div className={styles.heroOverlay}>
    <div className={styles.heroContent}>
      <h1>Precision weighing solutions since 1996</h1>
      <p>Industrial • Medical • Laboratory • Logistics</p>

      <div className={styles.heroButtons}>
        <Link to="/products" className={styles.primaryBtn}>
          Products
        </Link>
        <Link to="/about" className={styles.secondaryBtn}>
          Company
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* CATEGORIES */}
      <section className={styles.categories}>
        <Link to="/products/industrial" className={styles.categoryCard}>
          <img src={steel} alt="Industrial scales" />
          <span>Industrial Scales</span>
        </Link>

        <Link to="/products/laboratory" className={styles.categoryCard}>
          <img src={laboratory} alt="Laboratory scales" />
          <span>Laboratory</span>
        </Link>

        <Link to="/products/medical" className={styles.categoryCard}>
          <img src={medical} alt="Medical scales" />
          <span>Medical</span>
        </Link>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h2>Your partner for weighing systems</h2>
          <p>
            Makmera is a trusted company specializing in scales and weighing
            systems for industrial, medical, and laboratory use.
          </p>
          <p>
            We deliver precision, reliability, and long-term support for
            businesses that depend on accurate measurement.
          </p>
        </div>

        <img src={heroImg} alt="About Makmera" />
      </section>

      {/* INDUSTRIES */}
      <section className={styles.industries}>
        <h2>Used across all industries</h2>

        <div className={styles.industryGrid}>
          <IndustryCard title="Agriculture" img={agriculture} />
          <IndustryCard title="Laboratory" img={laboratory} />
          <IndustryCard title="Food & Grocery" img={grocery} />
          <IndustryCard title="Manufacturing" img={manufacturing} />
          {/* <IndustryCard title="Pharmaceutical" img={pharmaceutical} /> */}
          <IndustryCard title="Healthcare" img={medical} />
          {/* <IndustryCard title="Energy" img={energy} /> */}
          {/* <IndustryCard title="Waste & Recycling" img={waste} /> */}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Need a custom weighing solution?</h2>
        <Link to="/contact" className={styles.primaryBtn}>
          Contact Us
        </Link>
      </section>
    </div>
  );
}

function IndustryCard({ title, img }) {
  return (
    <div className={styles.industryCard}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Home;
