

import { NavLink, Outlet } from "react-router-dom";
import styles from "./Products.module.css";

function Products() {
  return (
    <div className={styles.productsLayout}>
      
      {/* LEFT SIDEBAR */}
      <aside className={styles.sidebar}>
        <h3>Categories</h3>

        <NavLink to="retail" className={styles.categoryLink}>
          Retail Scales
        </NavLink>

        <NavLink to="industrial" className={styles.categoryLink}>
          Industrial Scales
        </NavLink>

        <NavLink to="truckscales" className={styles.categoryLink}>
          Truck Scales
        </NavLink>

        <NavLink to="dosingscales" className={styles.categoryLink}>
          Dosing Scales
        </NavLink>

        <NavLink to="automation" className={styles.categoryLink}>
          Automation Systems
        </NavLink>

        <NavLink to="medical" className={styles.categoryLink}>
          Medical Scales
        </NavLink>

        <NavLink to="laboratory" className={styles.categoryLink}>
          Laboratory Scales
        </NavLink>

        <NavLink to="measuring" className={styles.categoryLink}>
          Measuring Equipment
        </NavLink>

        <NavLink to="foodindustry" className={styles.categoryLink}>
          Food Industry
        </NavLink>
      </aside>

      {/* RIGHT CONTENT */}
      <main className={styles.productsContent}>
        <Outlet />
      </main>

    </div>
  );
}

export default Products;
