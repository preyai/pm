import { Box, Button, Grid } from "@mui/material"
import { fakeTask } from "../../helpers/fake"
import useTasks from "../../hooks/useTasks"
import Task from "../Task"

const TaskList = () => {
    const { tasks, addTask } = useTasks()

    return (
        <Grid container spacing={2}>
            {tasks.map(task => (
                <Task task={task} key={task.id} />
            ))}
        </Grid>
    )
}
export default TaskList