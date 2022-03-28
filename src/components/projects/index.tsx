import { Box, Typography } from "@mui/material"
import ProjectsList from "./projectsList";
import { useFakeContext } from "../../context/fakeContext";

const Projects = () => {
    const {projects} = useFakeContext()

    return (
        <Box>
            <Typography variant="h2">Projects</Typography>
            <ProjectsList projects={projects} />
        </Box>
    )
}

export default Projects


