import Link from "next/link";
import Navlinks from "../navlinks/navlinks";
import Sidebar from "../sidebar/sidebar";
import styles from "./navbar.module.css"

const Navbar = () => {

    return (
        <div className={styles.container}>
            <Link className={styles.brand} href={"/"}>Aku Laurila</Link>
            <div className={styles.large_screen}>
                <Navlinks />
            </div>
            <Sidebar />
        </div>
    )
}

export default Navbar;