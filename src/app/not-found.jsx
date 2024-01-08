import Link from "next/link";
import styles from "./not-found.module.css"

const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <span className={styles.bg_decoration}>404</span>
            <p className={styles.desc}>
                The page you were looking for does not exist or has moved.
            </p>
            <Link className={styles.link} href={"/"}>
                <button className={styles.button}>Take me back to the front page!</button>
            </Link>
        </div>
    )
}

export default PageNotFound;