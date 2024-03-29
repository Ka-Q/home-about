"use server"
import styles from './project.module.css';
import { performRequest } from "@/lib/datocms";
import Article from '@/components/article/article';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params}, parent) {
    // read route params
    const slug = params.slug;
   
    // fetch data
    const query = `{
		project (filter: {slug: {eq: "${slug}"}}) {
			name
			previewImage {
				url
			}
			tags {
				name
			}
			externalLinks {
				linktype
				url
				text
			}
			description
            article
		}
	}`;

    const {data: {project}} = await performRequest({query: query});
   
    return {
      title: `Aku Laurila | ${project.name}`,
      description: project.description,
      robots: "noindex",
      openGraph: {
        images: [project.previewImage.url],
      }
    }
  }

const ProjectPage = async ({params}) => {

    const slug = params.slug;

    const query = `{
		project (filter: {slug: {eq: "${slug}"}}) {
			name
			previewImage {
				url
			}
			tags {
				name
			}
			externalLinks {
				linktype
				url
				text
			}
			description
            article
		}
	}`;

    const {data: {project}} = await performRequest({query: query});

    if (!project) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.summary_title}>Project summary</h1>
            <div className={styles.summary_container}>
                <div className={styles.title_container}>
                    <h2 className={styles.title}>{project.name}</h2>
                    <p className={styles.desc}>{project.description}</p>
                    <div className={styles.tag_container}>
                        {project.tags.map((tag)=> {
                            return (<span className={styles.tag} key={`${project.name}-${tag.name}`}>{tag.name}</span>)
                        })}
                    </div>
                </div>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Link</th>
                            <th>Type</th>
                        </tr>
                        {project.externalLinks.map((el) => {
                            return (
                                <tr key={el.url}>
                                    <td>{el.text}</td>
                                    <td><a href={el.url}>{el.url}</a></td>
                                    <td>{el.linktype}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Article article={project.article}/>
        </div>
    )
}

export default ProjectPage;