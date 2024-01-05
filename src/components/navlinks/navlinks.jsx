import Link from "next/link"
import styles from "./navlinks.module.css"

const links = [
    {
        text: "About",
        path: "/#top",
        hash: "top"
    },
    {
        text: "Featured projects",
        path: "/#projects",
        hash: "projects"
    },
    {
        text: "Skills",
        path: "/#skills",
        hash: "skills"
    },
    {
        text: "Contact",
        path: "/#contact",
        hash: "contact"
    },
    {
        text: "All projects",
        path: "projects"
    }
]

const Navlinks = () => {
    return (
        <div className={styles.container}>
        {links.map((n)=> {
            return (
                <a href={n.path} key={n.path}>{n.text}</a>
            )
        })}
        </div>
    )
}

export default Navlinks;