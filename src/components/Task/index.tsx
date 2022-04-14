import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useTasks from '../../hooks/useTasks';
import ITask from '../../interfaces/ITask';

interface TaskProps {
    task: ITask
}

const Task = ({ task }: TaskProps) => {
    const { removeTask } = useTasks()

    const handler = () => removeTask(task.id)

    return (
        <Grid item xs={4}>
            <Card>
                <CardContent>
                    <Typography variant='h6' component='div'>{task.title}</Typography>
                    <Typography variant='body1' component='div'>{task.text}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handler}>Remove</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default Task