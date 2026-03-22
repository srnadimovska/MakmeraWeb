import logo from "../assets/makmeralogo.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.jpg";
import linkedin from "../assets/linkedin.png";
import styles from "../components/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerDiv}>
        <p className={styles.logoMakmera}>
          <img src={logo} alt="logo" />
        </p>
        <div className={styles.footerContact}>
  <h2>MAKMERA PLUS DOOEL</h2>
  <p>Bulevar Makedonija br.16a</p>
  <p>1000 Skopje</p>
  <p><strong>Phone:</strong> +389 2 313 5400</p>
  <p><strong>Mobile:</strong> +389 78 260 060</p>
  <p><strong>Email:</strong> <a href="mailto:makmera@makmera.com.mk">makmera@makmera.com.mk</a></p>
  <p>© 2026 Makmera</p>
</div>
        <p className={styles.logoDiv}>
            <a href="https://www.facebook.com/" target="_blank"><img src={fb} alt="fblogo" /></a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><img src={insta} alt="instalogo" /></a>
          <a href="https://www.linkedin.com/" target="_blank"><img src={linkedin} alt="linkedinlogo" /></a>
          
        </p>
      </div>
    </>
  );
}

export default Footer;
