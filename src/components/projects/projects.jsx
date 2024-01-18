import ProjectCard from "../featuredProjectCard/featuredProjectCard"
import styles from "./projects.module.css"

const projects = [
    {
        name: "Demo webstore (WIP)",
        desc: "A fullstack web application for a mock-up webstore. Stack includes React, Express, MySQL and Cloudflare R2 Buckets.",
        path: "/dws",
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
        path: "/nextjs-homepage",
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
        path: "/book-application",
        image_path: "/book_application.jpg",
        tags: ["Android", "Java", "Room DB"],
        sources: [
            {name: "App", source: "https://github.com/Ka-Q/BookApplication"}
        ]
    },
    {
        name: "Old homepage",
        desc: "A responsive SPA built using React. This project was my first ever React application",
        path: "/old-homepage",
        image_path: "/old_homepage.png",
        tags: ["Web", "React", "SPA"],
        live_demo: "https://old.akulaurila.com",
        sources: [
            {name: "Page", source: "https://github.com/Ka-Q/old-homepage"}
        ]
    }
]

const Projects = () => {
    return (
        <div className={styles.container}>
            {projects.map((n) => {
                return (
                    <ProjectCard project={n} key={n.name}/>
                )
            })}
        </div>
    )
}

export default Projects;