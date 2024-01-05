"use client"

import { useState } from "react";
import Navlinks from "../navlinks/navlinks";
import styles from "./sidebar.module.css"

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <a className={styles.toggle} onClick={() => setOpen((prev) => !prev)}>≡</a>
            {open? 
                <div className={styles.sidebar}>
                    <Navlinks />
                </div>
            :
                <></>
            }
        </div>
    )
}

export default Sidebar;