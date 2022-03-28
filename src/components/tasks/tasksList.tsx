import { Grid } from "@mui/material"
import { Task } from "../../interfaces/task"
import TaskCard from "./taskCard"

interface TaskListInterface {
    tasks: Task[]
}

const TasksList = ({ tasks }: TaskListInterface) => {
    return (
        <Grid container spacing={2}>
            {tasks.map((task) => (
                <TaskCard task={task} />
            ))}
        </Grid>
    )
}

export default TasksList