"use client"
import ProjectCard from '@/components/projectCard/projectCard'
import styles from './projects.module.css'
import { useEffect, useState } from 'react';
import Loading from '../loading';

const ProjectsPage = () => {
	const [allTags, setAllTags] = useState([]);
	const [allProjects, setAllProjects] = useState([]);
	const [projects, setProjects] = useState([]);
	const [filter, setFilter] = useState([]);

	useEffect(() => {
		const fetchProjectsAndTags = async () => {
			const path = `/api/all_projects_and_all_tags`;
			const f = await fetch(path);
			const {data: {allProjects, allTags}} = await f.json()
			setAllProjects(allProjects);
			setProjects(allProjects);
			setAllTags(allTags);
		}

		if (allTags.length == 0 || allProjects.length == 0) {
			fetchProjectsAndTags();
		}

	}, [])

	useEffect(() => {
		const filterProjects = async () => {
			if (filter.length > 0){
				setProjects(allProjects.filter((n) => { if (n.tags.some(v=> filter.indexOf(v.id) !== -1)) return n}));
			}
			else {
				setProjects(allProjects);
			}
		}
		if (allProjects.length > 0)
			filterProjects();
	}, [filter])

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
			<h1 className={styles.title}>Here's a list of my public projects</h1>
			<div className={styles.filter_container}>
				<h3 className={styles.filter_title}>Filter by tags</h3>
				<p className={styles.filter_desc}>You can filter the list by selecting from the tags below</p>
				{allTags && allTags.map((n) => <button className={`${styles.tag_selector} ${filter.includes(n.id) && styles.selected}`} key={n.id} onClick={() => handleTagFilter(n.id)}>{n.name}</button>)}
			</div>
			<p className={styles.desc}>Select a project to view it's page, including relevant links and maybe even a blog post about it :)</p>
			{projects.length == 0 ? 
				<div style={{minHeight: "25rem"}}>
					<Loading />
				</div>
				: 
				<div className={styles.grid}>
					{projects && projects.map((n) => {
						return (
							<ProjectCard project={n} key={n.name}/>
						)
					})}
				</div>
			}
			
		</div>
	)
}

export default ProjectsPage;
