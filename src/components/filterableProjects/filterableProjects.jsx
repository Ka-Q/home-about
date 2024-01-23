"use client"
import ProjectCard from '@/components/projectCard/projectCard'
import styles from './filterableProjects.module.css'
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import TagFilter from '../tagFilter/tagFilter';

const FilterableProjects = () => {
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
	
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Here&apos;s a list of my relevant projects</h1>
			<TagFilter filter={filter} setFilter={setFilter} tagList={allTags}/>
			<p className={styles.desc}>Select a project to view its page, including relevant links and maybe even a blog post about it. Some of my smaller projects are only available on my <a href='https://github.com/Ka-Q'>GitHub.</a></p>
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

export default FilterableProjects;