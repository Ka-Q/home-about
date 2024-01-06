"use client"
import { useState } from "react"
import styles from "./contactForm.module.css"
import HCaptcha from "@hcaptcha/react-hcaptcha"

const ContactForm = () => {

    //const [counter, setCounter] = useState(0); 
    const [name, setName] = useState(""); 
    const [disabled, setDisabled] = useState(false); 
    const [captchaValue, setCaptchaValue] = useState(""); 

    const onHCaptchaChange = (token) => {
        console.log(token);
        setCaptchaValue(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let form = e.target;

        const hCaptcha = form.querySelector('textarea[name=h-captcha-response]');
        if (!hCaptcha.value) {
            alert("Please fill out the captcha field before submitting.");
            return
        }

        const result = document.getElementById('result');
        result.style.display = "flex";

        const formData = new FormData(form);
        formData.append("h-captcha-response", captchaValue);

        const object = Object.fromEntries(formData);

        console.log("FORM DATA: ");
        console.log(object);

        const json = JSON.stringify(object);
        result.innerHTML = "<div>Please wait...</div>"

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            if (response.status == 200) {
                result.innerHTML = "<div>Message sent successfully! I will get back to you soon!</div>";
                setDisabled(true);
            } else {
                result.innerHTML = "<div>Something went wrong!</div>";
                console.log(json);
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            }
        })
        .catch(error => {
            result.innerHTML = "<div>Something went wrong ERROR!</div>";
            console.log(error);
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        })
        .then(function () {
            form.reset();
        });
    }       

    return (
        <>
        <form name="contact" action="https://api.web3forms.com/submit" method="POST" className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <input type="hidden" name="access_key" value="cdfb847a-63a6-417a-a220-457dada415b1" />
            <input type="hidden" name="from_name" value="about.akulaurila.com"></input>
            <input type="hidden" name="subject" value={`A new message from ${name}!`}/>
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
            <label htmlFor="email-input" className={styles.label}>email</label>
            <div className={styles.inputs}>
                <input  
                    type="email" 
                    name="email"
                    id="email-input"
                    placeholder="example@example.com" 
                    className={styles.input} 
                    required
                    disabled={disabled}
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
                    onChange={(e) => setName(e.target.value)}
                    disabled={disabled}
                />
                <label htmlFor="message-input" className={styles.label}>message</label>
                <textarea 
                    name="message"
                    id="message-input"
                    placeholder="Your message" 
                    className={styles.input} 
                    required
                    minLength={10}
                    disabled={disabled}
                />
                <div id="result" className={styles.result}></div>
            </div>
            <span className={styles.disclaimer}>Your information will never be shared publicly. For more information, you can check the <a href="https://web3forms.com/" target="_blank">documentation for Web3forms.</a></span> 
            <div className={styles.button_container}>
                <div className={styles.h_captcha}>
                    <div>
                        <div className={styles.h_captcha_border}></div>
                        <HCaptcha sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" onVerify={onHCaptchaChange} theme="dark" />
                    </div>
                </div>
                <button type="submit" id="submit" className={styles.button} disabled={disabled}>Send</button>
            </div>
        </form>
        </>
    )
}

export default ContactForm;