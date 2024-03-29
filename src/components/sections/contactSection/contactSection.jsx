import dynamic from "next/dynamic";

import styles from "./contactSection.module.css"
import Image from "next/image";
import Loading from "@/app/loading";

const ContactForm = dynamic(() => import('@/components/contactForm/contactForm'), { ssr: false, loading: () => <div style={{paddingBottom: "5rem"}}><Loading/></div> })

const ContactSection = () => {
    return (
        <div id="contact" className={styles.container}>
            <div className={styles.animation_container}>
                <Image src="/paper_plane.svg" alt="animation" width={200} height={200} className={styles.plane}/>
            </div>
            <div className={styles.form_container}>
                <h1 className={styles.title}>Contact me</h1>
                <br/>
                <p className={styles.desc}>
                    Have an offer, or just want to chat? You can email me directly at <a href="mailto:contact.akulaurila.com">contact@akulaurila.com</a> or leave a message using this form.
                </p>
                <div className={styles.form}>
                    <ContactForm />
                </div>
            </div>
            <Image src="/mail_icon.svg" alt="mail icon" width={50} height={50} className={styles.icon1}/>
            <Image src="/mail_icon.svg" alt="mail icon" width={50} height={50} className={styles.icon2}/>
            <Image src="/mail_icon.svg" alt="mail icon" width={50} height={50} className={styles.icon3}/>
            <Image src="/mail_icon.svg" alt="mail icon" width={50} height={50} className={styles.icon4}/>
            <Image src="/mail_icon.svg" alt="mail icon" width={50} height={50} className={styles.icon5}/>
            <Image src="/mail_icon.svg" alt="mail icon" width={50} height={50} className={styles.icon6}/>
        </div>
    );
}

export default ContactSection;