import Image from "next/image"
import styles from "./featuredProjectCard.module.css"
import Link from "next/link"

const ProjectCard = ({project}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image src={project.previewImage.url} alt="Project preview image" fill sizes="(max-width: 600px) 80vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" className={styles.image}/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{project.name}</h2>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tag_container}>
                    {project.tags.map((tag)=> {
                        return (<span className={styles.tag} key={`${project.name}-${tag.name}`}>{tag.name}</span>)
                    })}
                </div>
            </div>
            <div className={styles.hover_content}>
                <h2 className={styles.title}>{project.name}</h2>
                <div className={styles.hover_button_container}>
                    {project.externalLinks.map((el) => {
                        if (el.linktype == 'source') {
                            return (
                                <Link href={el.url} key={`${project.name}${el.text}`}>
                                    <button className={styles.hover_button}>{el.text}</button>
                                </Link>
                            )
                        }
                        else if (el.linktype == 'live') {
                            return (
                                <Link href={el.url} key={`${project.name}${el.text}`}>
                                    <button className={styles.hover_button}><span className={styles.live}>🔴</span> Live demo</button> 
                                </Link>
                            )
                        }
                    })}
                    <Link href={`/projects/${project.slug}`}>
                        <button className={styles.hover_button}>Project page</button> 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard