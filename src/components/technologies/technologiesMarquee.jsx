"use client"

import Marquee from "react-fast-marquee"
import styles from "./technologiesMarquee.module.css"
import Image from "next/image"

const images = [
    {
        path: "/HTML5_logo.png",
        alt: "HTML5"
    },
    {
        path: "/CSS3_logo.png",
        alt: "CSS3"
    },
    {
        path: "/js_logo.png",
        alt: "JavaScript"
    },
    {
        path: "/React_logo.png",
        alt: "React"
    },
    {
        path: "/Node_logo.png",
        alt: "Node JS"
    },
    {
        path: "/express_logo.png",
        alt: "Express JS",
        inverted: true
    },
    {
        path: "/nextjs_logo.png",
        alt: "Next JS",
        inverted: true
    },
    {
        path: "/Java_logo.png",
        alt: "Java"
    },
    {
        path: "/Python_logo.png",
        alt: "Python"
    },
    {
        path: "/Mysql_logo.png",
        alt: "MySQL"
    },
    {
        path: "/Git_logo.png",
        alt: "Git"
    }
]

const TechnologiesMarquee = () => {
    return (
        <div className={styles.technologies}>
            <Marquee autoFill>
                {images.map((n) => {
                    return (
                        <div className={styles.container + (n.inverted? ` ${styles.inverted}` : "")} key={n.path}>
                            <Image src={n.path} alt={n.alt} objectFit={'contain'} layout={"fill"} sizes={"10vw"}/>
                        </div>
                    )
                })}
            </Marquee>
        </div>
    )
}

export default TechnologiesMarquee;