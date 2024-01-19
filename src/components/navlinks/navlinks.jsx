"use client"
import Link from "next/link"
import styles from "./navlinks.module.css"

const links = [
    {
        text: "About",
        path: "/#top"
    },
    {
        text: "Featured projects",
        path: "/#projects"
    },
    {
        text: "Skills",
        path: "/#skills"
    },
    {
        text: "Contact",
        path: "/#contact"
    },
    {
        text: "|",
        path: "div"
    },
    {
        text: "All projects",
        path: "/projects"
    }
]

const Navlinks = () => {

    return (
        <div className={styles.container}>
        {links.map((n)=> {
            return (
                <>{n.path != "div"? <Link href={n.path} key={n.path}>{n.text}</Link> : <div className={styles.link_divider}></div>}</>
            )
        })}
        </div>
    )
}

export default Navlinks;