import Image from "next/image"
import styles from "./projectCard.module.css"
import Link from "next/link"

const ProjectCard = ({project}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image src={project.image_path} alt="Project preview image" fill sizes="(max-width: 600px) 80vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" className={styles.image}/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{project.name}</h2>
                <p className={styles.desc}>{project.desc}</p>
                <div className={styles.tag_container}>
                    {project.tags.map((tag)=> {
                        return (<span className={styles.tag} key={`${project.name}-${tag}`}>{tag}</span>)
                    })}
                </div>
            </div>
            <div className={styles.hover_content}>
                <h2 className={styles.title}>{project.name}</h2>
                <div className={styles.tag_container}>
                    {project.tags.map((tag)=> {
                        return (<span className={styles.tag} key={`${project.name}-${tag}`}>{tag}</span>)
                    })}
                </div>
                <div className={styles.hover_button_container}>
                    {project.sources.map((source) => {
                        return (
                            <Link href={source.source} key={`${project.name}${source.name}`}>
                                <button className={styles.hover_button}>{`${source.name} source code`}</button>
                            </Link>
                        )
                    })}
                    {project.live_demo? 
                    <Link href={project.live_demo}>
                        <button className={styles.hover_button}><span className={styles.live}>🔴</span> Live demo</button> 
                    </Link>
                    : <></>}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard