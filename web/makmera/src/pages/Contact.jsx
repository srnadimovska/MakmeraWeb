import { useState } from "react";
import styles from "./Contact.module.css";
import Map from "../components/Map";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form ready. Email connection comes next 🙂");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className={styles.contactWrapper}>
      <h2>Contact Us</h2>

      {/* TOP SECTION */}
      <div className={styles.topSection}>
        {/* LEFT – CONTACT INFO */}
        <div className={styles.info}>
          {/* <h3>Our Locations</h3> */}

          <div className={styles.location}>
            <strong>Skopje – Head Office</strong>
            <p>Bulevar Makedonija 16a, Centar, Skopje</p>
            <p>✉ <a href="mailto:makmera@makmera.com.mk">makmera@makmera.com.mk</a></p>
            <h4>+00389 3 135 400</h4>
          </div>

          <div className={styles.location}>
            <strong>Skopje – Warehouse & Service</strong>
            <p>Bulevar Boris Trajkovski, Skopje</p>
            <p>✉ <a href="mailto:makmera@makmera.com.mk">makmera@makmera.com.mk</a></p>
            <h4>+00389 3 135 400</h4>
          </div>

          <div className={styles.location}>
            <strong>Bitola - Office & Service</strong>
            <p>Boulevard 1st of May 124, 7000 Bitola</p>
            <p>✉ <a href="mailto:makmerabt@yahoo.com">makmerabt@yahoo.com</a></p>
            <h4>+00389 75 443 100</h4>
          </div>

          <div className={styles.location}>
            <strong>Strumica - Office & Service</strong>
            <p>Kliment Ohridski 104, 2400 Strumica</p>
            <p>✉ <a href="mailto:vane@makmera.com.mk">vane@makmera.com.mk</a></p>
            <h4>+00389 75 253 023</h4>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

     
      <div className={styles.mapWrapper}>
        <Map />
      </div>

      {/* <div>
        <h2>Locations:</h2>
        <div>
          <h3>MAKMERA PLUS DOOEL Skopje - Head office</h3>
          <p>Bulevar Makedonija 16A Centar</p>
          <h4>1000 Skopje</h4>
          <h4>Contact: +003893135400 </h4>
          <h4>Email: makmera@makmera.com.mk</h4>
        </div>
        <div>
          <h3>MAKMERA PLUS DOOEL Skopje - Service & Warehouse</h3>
          <p>Bulevar Boris Trajkovski</p>
          <h4>1000 Skopje</h4>
          <h4>Contact: +00389 3135 400 </h4>
          <h4>Email: makmera@makmera.com.mk</h4>
        </div>
        <div>
          <h3>MAKMERA PLUS DOOEL Bitola - Office & Service</h3>
          <p>Bulevar 1st of May 124</p>
          <h4>7000 Bitola</h4>
          <h4>Contact: +00389 75 443 100 </h4>
          <h4>Email: makmerabt@yahoo.com</h4>
        </div>
        <div>
          <h3>MAKMERA PLUS DOOEL Strumica - Office & Service</h3>
          <p>Kliment Ohridski 104</p>
          <h4>2400 Strumica</h4>
          <h4>Contact: +00389 75 253 023 </h4>
          <h4>Email: vane@makmera.com.mk</h4>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
