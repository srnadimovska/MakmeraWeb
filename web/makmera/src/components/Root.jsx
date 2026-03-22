import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Root.module.css";

function Root(){
    return(
        <div className={styles.rootWrapper}>
        <header>
            <Navbar />
        </header>
        <main className={styles.pageWrapper}>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
        
        
        </div>
    )
}

export default Root;