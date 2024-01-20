import styles from './article.module.css'
import { remark } from 'remark';
import html from 'remark-html';

const Article = async ({article}) => {
    return (
        <div className={styles.article_container}>
            <div className={styles.article} dangerouslySetInnerHTML={{__html: (await remark().use(html).process(article)).toString()}} />
        </div>
    )
}

export default Article;