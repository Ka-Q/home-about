
import styles from "./page.module.css"
import HeroSection from "@/components/sections/heroSection/heroSection";
import TechnologiesMarquee from "@/components/technologies/technologiesMarquee";
import ProjectsSection from "@/components/sections/projectsSection/projectsSection";
import SkillsSection from "@/components/sections/skillsSection/skillsSection";
import ContactSection from "@/components/sections/contactSection/contactSection";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <HeroSection />
            <TechnologiesMarquee />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </div>
    )
}

export default HomePage;