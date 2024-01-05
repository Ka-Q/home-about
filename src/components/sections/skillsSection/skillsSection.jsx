import SkillCard from "@/components/skillCard/skillCard";
import styles from "./skillsSection.module.css";

const SkillsSection = () => {

    let list = [
        {
            title: "Front-end",
            skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"]
        },
        {
            title: "Back-end",
            skills: ["NodeJS", "Express", "JavaScript", "Python", "Java", "SQL", "REST", "DNS records"]
        },
        {
            title: "Cloud/Hosting Providers",
            skills: ["AWS", "Azure", "Cloudflare", "Vercel", "Netlify"]
        },
        {
            title: "Dev Ops",
            skills: ["Agile", "Scrum", "CI/CD", "Git"]
        },
        {
            title: "Familiar tools",
            skills: ["Git", "GitHub", "Postman", "Linux"]
        },
        {
            title: "Mobile",
            skills: ["Android", "React native"]
        }
    ]

    return (
        <div className={styles.container} id="skills">
            <h1 className={styles.title}><span>Relevant skills</span> I have</h1>
            <div className={styles.card_container}>
            {
                list.map((n) => {
                    return (
                        <SkillCard category={n} key={n.title}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default SkillsSection;