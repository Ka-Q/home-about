import Link from "next/link";
import styles from "./heroSection.module.css"
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_image}>
                <Image src="/wasp_in_amber.png" alt="a wasp in amber" fill/>
            </div>
            <div className={styles.hero_section}>
                <h1>👋 Hi! And welcome to my homepage!</h1>
                <br/>
                <p>
                    I am Aku Laurila, a backend minded software- and full-stack web-developer located in Kuopio, Finland. 
                </p>
                <br/>
                <p>
                    I'm currently studying computer science at the University of Eastern Finland and looking for commissions. Examples of my past projects and technical skills can be found just below.
                </p>
                <br/>
                <p>
                    Check me out on: 
                </p>
                <div className={styles.socials}>
                    <Link href="https://github.com/Ka-Q">
                        <button className={styles.social_button}>
                            <Image src="/github_logo.png" alt="GitHub logo" fill className={styles.github}/>
                        </button>
                    </Link>
                    <button className={styles.social_button}>
                        <Image src="/linkedin_logo.png" alt="LinkedIn logo" fill className={styles.linkedin}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;