
import ProjectCard from '@/components/projectCard/projectCard'
import styles from './projects.module.css'

const ProjectsPage = () => {


	const projects = [
		{
			name: "Demo webstore (WIP)",
			desc: "A fullstack web application for a mock-up webstore. Stack includes React, Express, MySQL and Cloudflare R2 Buckets.",
			slug: "dws",
			image_path: "/DWS_wip.png",
			tags: ["Web", "React", "Express", "MySQL", "R2/S3"],
			live_demo: "https://dws.akulaurila.com/",
			sources: [
				{name: "Client", source: "https://github.com/Ka-Q/demo-webstore-front"},
				{name: "API", source: "https://github.com/Ka-Q/demo-webstore-api"}
			]
		},
		{
			name: "Next.js homepage",
			desc: "A responsive front-end project built using Next.js. Made to replace my old website.",
			slug: "nextjs-homepage",
			image_path: "/About_wip.png",
			tags: ["Web", "React", "Next.js"],
			live_demo: "https://about.akulaurila.com",
			sources: [
				{name: "Page", source: "https://github.com/Ka-Q/home-about"}
			]
		},
		{
			name: "Android Book Appliction",
			desc: "An application that tracks the user's reading habits, most read categories and hours read / day.",
			slug: "book-application",
			image_path: "/book_application.jpg",
			tags: ["Android", "Java", "Room DB"],
			sources: [
				{name: "App", source: "https://github.com/Ka-Q/BookApplication"}
			]
		},
		{
			name: "Old homepage",
			desc: "A responsive SPA built using React. This project was my first ever React application",
			slug: "old-homepage",
			image_path: "/old_homepage.png",
			tags: ["Web", "React", "SPA"],
			live_demo: "https://old.akulaurila.com",
			sources: [
				{name: "Page", source: "https://github.com/Ka-Q/old-homepage"}
			]
		},
		{
			name: "Old homepagelll",
			desc: "A responsive SPA built using React. This project was my first ever React application",
			slug: "old-homepage",
			image_path: "/old_homepage.png",
			tags: ["Web", "React", "SPA"],
			live_demo: "https://old.akulaurila.com",
			sources: [
				{name: "Page", source: "https://github.com/Ka-Q/old-homepage"}
			]
		},
		{
			name: "Old homepagekkk",
			desc: "A responsive SPA built using React. This project was my first ever React application",
			slug: "old-hdddasdomepage",
			image_path: "/old_homepage.png",
			tags: ["Web", "React", "SPA"],
			live_demo: "https://old.akulaurila.com",
			sources: [
				{name: "Page", source: "https://github.com/Ka-Q/old-homepage"}
			]
		},
		{
			name: "Old homepagejjj",
			desc: "A responsive SPA built using React. This project was my first ever React application",
			slug: "old-dasdhomepage",
			image_path: "/old_homepage.png",
			tags: ["Web", "React", "SPA"],
			live_demo: "https://old.akulaurila.com",
			sources: [
				{name: "Page", source: "https://github.com/Ka-Q/old-homepage"}
			]
		},
		{
			name: "Old homepagehhhh",
			desc: "A responsive SPA built using React. This project was my first ever React application",
			slug: "old-hasdomepage",
			image_path: "/old_homepage.png",
			tags: ["Web", "React", "SPA"],
			live_demo: "https://old.akulaurila.com",
			sources: [
				{name: "Page", source: "https://github.com/Ka-Q/old-homepage"}
			]
		},
		{
			name: "Old homepageggg",
			desc: "A responsive SPA built using React. This project was my first ever React application",
			slug: "old-homsdsdsaepage",
			image_path: "/old_homepage.png",
			tags: ["Web", "React", "SPA"],
			live_demo: "https://old.akulaurila.com",
			sources: [
				{name: "Page", source: "https://github.com/Ka-Q/old-homepage"}
			]
		},
		{
			name: "Old homepageffffs",
			desc: "A responsive SPA built using React. This project was my first ever React application",
			slug: "old-homepsdadage",
			image_path: "/old_homepage.png",
			tags: ["Web", "React", "SPA"],
			live_demo: "https://old.akulaurila.com",
			sources: [
				{name: "Page", source: "https://github.com/Ka-Q/old-homepage"}
			]
		}
	]

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Here's a list of my public projects</h1>
			<div className={styles.filter_container}>
				<input className={styles.input} type='text' placeholder='search'/> 
				<button className={styles.button}>Filter</button>
			</div>
			<div className={styles.grid}>
				{projects.map((n) => {
					return (
						<ProjectCard project={n} key={n.name}/>
					)
				})}
			</div>
		</div>
	)
}

export default ProjectsPage;
