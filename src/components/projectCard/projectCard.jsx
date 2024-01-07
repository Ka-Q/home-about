import Image from "next/image"
import styles from "./projectCard.module.css"
import Link from "next/link"

const ProjectCard = ({project}) => {
    return (
        <Link href={`/projects${project.path}`} className={styles.container}>
            <div className={styles.image_container}>
                <div className={styles.hover_image}><span>→</span></div>
                <Image src={project.image_path} alt="Project preview image" fill sizes="(max-width: 600px) 80vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" className={styles.image}/>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{project.name}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.tag_container}>
                    {project.tags.map((tag)=> {
                        return (<span className={styles.tag} key={`${project.name}-${tag}`}>{tag}</span>)
                    })}
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard