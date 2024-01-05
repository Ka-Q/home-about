"use client"

import Link from "next/link"
import styles from "./navlinks.module.css"
import { usePathname } from "next/navigation"

const links = [
    {
        text: "About",
        path: "/",
        hash: "#top"
    },
    {
        text: "Featured projects",
        path: "/",
        hash: "#projects"
    },
    {
        text: "Skills",
        path: "/",
        hash: "#skills"
    },
    {
        text: "Contact",
        path: "/",
        hash: "#contact"
    },
    {
        text: "All projects",
        path: "/projects",
        hash: "#"
    }
]

const Navlinks = () => {

    let path = usePathname();
    console.log(path);

    return (
        <div className={styles.container}>
        {links.map((n)=> {
            return (
                <Link href={n.path + n.hash} key={n.path + n.hash} scroll={false}>{n.text}</Link>
            )
        })}
        </div>
    )
}

export default Navlinks;