"use client"
import styles from './tagFilter.module.css';



const TagMenu = ({tagList, filter, setFilter}) => {

    const handleTagFilter = (id) => {
		let index = filter.indexOf(id);
		if (index < 0) {
			setFilter([...filter, id])
		} else {
			setFilter(filter.filter((n) => {if (n != id) return n}));
		}
	}

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Filter by tags</h3>
            <p className={styles.desc}>You can filter the list by toggling the tags below</p>
            {tagList && tagList.map((n) => <button className={`${styles.tag} ${filter.includes(n.id) && styles.selected}`} key={n.id} onClick={() => handleTagFilter(n.id)}>{n.name}</button>)}
        </div>
    )
}

export default TagMenu;