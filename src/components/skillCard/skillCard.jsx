import styles from "./skillCard.module.css"

const SkillCard = ({category}) => {
    return (
        <div key={category.title} className={styles.container}>
            <h3 className={styles.title}>{category.title}</h3>
            {category.skills.join(', ')}
        </div>
    )
}

export default SkillCard;