import styles from "./About.module.css";
import srna from "../assets/SrnaDimovska2.jpg"
import defaultPhoto from "../assets/default.png"

function About() {
  return (
    <div className={styles.container}>
      <section className={styles.companySection}>
        <p>
          <strong>MAKMERA PLUS DOOEL</strong> is a family-owned company with more than 30 years of consistent
          market presence. Through its professional approach, the company has collaborated with
          major businesses across the country and the region. With a broad range of products
          and services, MAKMERA PLUS DOOEL stands among the leading companies for scales and
          weighing systems.
        </p>
      </section>

      <section className={styles.teamSection}>
        <h1 className={styles.title}>The Team</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src={defaultPhoto} alt="martin"/>
            <h2>Martin Trajkovski</h2>
            <h4>CEO</h4>
            <a href="mailto:martin@makmera.com.mk">martin@makmera.com.mk</a>
          </div>

          <div className={styles.card}>
            <img src={srna} alt="srna" />
            <h2>Srna Dimovska</h2>
            <h4> Finance department / Quality Manager</h4>
            <a href="mailto:srna@makmera.com.mk">srna@makmera.com.mk</a>
          </div>

          <div className={styles.card}>
            <img src={defaultPhoto} alt="zlatko"/>
            <h2>Zlatko Dungevski</h2>
            <h4>Service department / Technical Manager</h4>
            <a href="mailto:zlatko.d@makmera.com.mk">zlatko.d@makmera.com.mk</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
