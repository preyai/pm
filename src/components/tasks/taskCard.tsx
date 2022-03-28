import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { Task } from "../../interfaces/task"

interface TaskCardInterface {
    task: Task
}

const TaskCard = ({ task }: TaskCardInterface) => {
    const navigate = useNavigate();

    return (
        <Grid item xs={12} key={task.id}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {task.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {task.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button
                        size="small"
                        onClick={() => { navigate(`/projects/${task.project}`) }}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default TaskCard