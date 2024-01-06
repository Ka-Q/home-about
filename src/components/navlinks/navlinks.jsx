import Link from "next/link"
import styles from "./navlinks.module.css"
import { usePathname } from "next/navigation"

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
        text: "All projects",
        path: "projects"
    }
]

const Navlinks = () => {

    return (
        <div className={styles.container}>
        {links.map((n)=> {
            return (
                <Link href={n.path} key={n.path}>{n.text}</Link>
            )
        })}
        </div>
    )
}

export default Navlinks;