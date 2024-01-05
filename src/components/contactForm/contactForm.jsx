"use client"

import { useState } from "react";
import styles from "./contactForm.module.css"

const ContactForm = () => {
    return (
        <form name="contact" method="post" data-netlify="true" className={styles.form}>
            <label htmlFor="email-input" className={styles.label}>email</label>
            <input  
                type="email" 
                name="email"
                id="email-input"
                placeholder="example@example.com" 
                className={styles.input} 
                required
            />
            <label htmlFor="name-input" className={styles.label}>name</label>
            <input 
                type="text" 
                name="name"
                id="name-input"
                placeholder="Your name" 
                className={styles.input} 
                required
                minLength={1}
            />
            <label htmlFor="message-input" className={styles.label}>message</label>
            <textarea 
                name="message"
                id="message-input"
                placeholder="Your message" 
                className={styles.input} 
                required
                minLength={10}
            />
            <div className={styles.button_container}>
                <span className={styles.disclaimer}>Your information will never be shared publicly. For more information, you can check the <a href="https://www.netlify.com/platform/core/forms/" target="_blank">documentation for Netlify forms.</a></span> 
                <button type="submit" className={styles.button}>Send ⪼</button>
            </div>
        </form>
    )
}

export default ContactForm;