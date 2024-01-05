import Link from "next/link"
import styles from "./navlinks.module.css"

const links = [
    {
        text: "About",
        path: "",
        hash: "top"
    },
    {
        text: "Featured projects",
        path: "",
        hash: "projects"
    },
    {
        text: "Skills",
        path: "",
        hash: "skills"
    },
    {
        text: "Contact",
        path: "",
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
                <Link href={{pathname: n.path, hash: n.hash}} key={n.path}>{n.text}</Link>
            )
        })}
        </div>
    )
}

export default Navlinks;