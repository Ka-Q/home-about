import styles from "./skillCard.module.css"

const SkillCard = ({category}) => {
    return (
        <div key={category.title} className={styles.container}>
            <h2 className={styles.title}>{category.title}</h2>
            <p>{category.skills.join(', ')}</p>
        </div>
    )
}

export default SkillCard;