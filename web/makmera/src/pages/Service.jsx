import styles from "./Service.module.css";

function Service() {
  return (
    <div className={styles.serviceWrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Our Services</h1>
        <p>
          Professional services in scale maintenance, calibration,
          production and inspection, delivered in accordance with
          international standards.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Scale Service & Maintenance</h3>
          <p>
            Servicing of electronic and mechanical scales, spare parts
            replacement, preventive maintenance and metalwork services.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Calibration & Verification</h3>
          <p>
            Official calibration and verification of scales according to
            Ministry of Energy regulations and legal metrology standards.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Production of Scales</h3>
          <p>
            Design and production of industrial and custom-made scales
            tailored to specific customer requirements.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Inspection Services</h3>
          <p>
            Inspection of concrete and asphalt plants, including validation
            of measurement systems in compliance with ISO standards.
          </p>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className={styles.certification}>
        <h2>Certified & Authorized</h2>
        <p>
          Makmera Plus is ISO/IEC 17020 certified and operates in cooperation
          with the Ministry of Energy, ensuring reliability, accuracy and
          compliance in all services.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Need Professional Support?</h2>
        <p>Contact us for servicing, calibration or inspection services.</p>
      </section>
    </div>
  );
}

export default Service;
