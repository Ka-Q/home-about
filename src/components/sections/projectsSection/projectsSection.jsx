import FeaturedProjects from "@/components/featuredProjects/featuredProjects";
import styles from "./projectsSection.module.css";
import Link from "next/link";

const ProjectsSection = () => {
    return (
        <div className={styles.projects_container} id="projects">
            <h1 className={styles.projects_title}>Some featured projects</h1>
            <p className={styles.projects_desc}>
                Here are some selected favourites. Tap/hover on a card to view some relevant links.
            </p>
            <FeaturedProjects />
            <div className={styles.more_projects_container}>
                <Link href={"https://github.com/Ka-Q?tab=repositories"} className={styles.more_projects}>More projects →</Link>
            </div>
        </div>
    )
}

export default ProjectsSection;