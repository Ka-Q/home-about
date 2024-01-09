import styles from "./loading.module.css";

const Loading = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Loading</h1>
            <div className={styles.loading_container}>
                <h1 className={styles.loading}>
                    <span className={styles.dot1}>.</span>
                    <span className={styles.dot2}>.</span>
                    <span className={styles.dot3}>.</span>
                    <span className={styles.dot4}>.</span>
                    <span className={styles.dot5}>.</span>
                </h1>
            </div>
        </div>
    )
}

export default Loading;