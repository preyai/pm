import { Box, Typography } from "@mui/material"
import Image from 'material-ui-image'
import { useLocation, useParams } from "react-router-dom";
import { useFakeContext } from "../../context/fakeContext";
import { Project } from "../../interfaces/project";
import TasksList from "../tasks/tasksList";

const ProjectPage = () => {
    const { projects, tasks } = useFakeContext()
    const params = useParams();
    const project: Project | undefined = projects.find((item: Project) => item.id === params.id)

    if (project) {
        return (
            <Box>
                {project.image &&
                    <img
                        src={project.image}
                        style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover'
                        }}
                        alt='company'
                    />
                }
                <Typography variant="h2">{project.title}</Typography>
                <Typography >{project.description}</Typography>
                <Typography variant="h3">Tasks</Typography>
                <TasksList tasks={tasks.filter((task) => task.project === params.id)} />
            </Box>
        )
    }
    else {
        return (
            <Box>
                <Typography variant="h2">404</Typography>
            </Box>
        )
    }

}

export default ProjectPage