import { Box, Typography } from "@mui/material"
import { useFakeContext } from "../../context/fakeContext"
import TasksList from "./tasksList"

const Tasks = () => {
    const { tasks } = useFakeContext()
    return (
        <Box>
            <Typography variant="h2">Tasks</Typography>
            <TasksList tasks={tasks} />
        </Box>
    )
}

export default Tasks