import { Grid } from "@mui/material"
import { Project } from "../../interfaces/project"
import ProjectCard from "./projectCard"

interface ProjectsListProps {
    projects: Array<Project>
}
const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <Grid container spacing={2}>
            {projects.map((project) => (
                <ProjectCard project={project} key={project.id} />
            ))}
        </Grid>
    )
}

export default ProjectsList