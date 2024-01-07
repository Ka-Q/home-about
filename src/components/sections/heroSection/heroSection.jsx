import Link from "next/link";
import styles from "./heroSection.module.css"
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_image}>
                <Image src="/wasp_in_amber.png" alt="a wasp in amber" fill sizes="(max-width: 600px) 33vw, (max-width: 1200px) 33vw, 20vw" priority/>
            </div>
            <div className={styles.hero_section}>
                <h1>👋 Hi! And welcome to my homepage!</h1>
                <br/>
                <p>
                    I am Aku Laurila, a backend minded software- and full-stack web-developer located in Kuopio, Finland. 
                </p>
                <br/>
                <p>
                    I&apos;m currently studying computer science at the University of Eastern Finland and looking opportunities in the field of Web Development. Examples of my past projects and technical skills can be found just below.
                </p>
                <br/>
                <p>
                    If you&apos;re interested, you can <a href="#contact">contact me</a> or check me out on: 
                </p>
                <div className={styles.socials}>
                    <Link href="https://github.com/Ka-Q">
                        <button className={styles.social_button}>
                            <Image src="/github_logo.png" alt="GitHub" fill sizes="8rem" className={styles.github}/>
                        </button>
                    </Link>
                    <Link href="https://linkedin.com/in/aku-laurila-045bb72a8">
                        <button className={styles.social_button}>
                            <Image src="/linkedin_logo.png" alt="LinkedIn" fill sizes="8rem" className={styles.linkedin}/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;