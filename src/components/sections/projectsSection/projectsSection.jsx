import Projects from "@/components/projects/projects";
import styles from "./projectsSection.module.css";
import Link from "next/link";

const ProjectsSection = () => {
    return (
        <div className={styles.projects_container} id="projects">
            <h1 className={styles.projects_title}>Some projects of mine</h1>
            <p className={styles.projects_desc}>
                Select a card to go to a project&apos;s dedicated page.
            </p>
            <Projects />
            <div className={styles.more_projects_container}>
                <Link href={"https://github.com/Ka-Q?tab=repositories"} className={styles.more_projects}>More projects →</Link>
            </div>
        </div>
    )
}

export default ProjectsSection;