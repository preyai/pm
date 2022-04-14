import { Add, Clear, ClearAll } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { fakeTask } from "../../helpers/fake";
import useTasks from "../../hooks/useTasks";

const Footer = () => {
    const { addTask, clearTask } = useTasks()

    const add = () => addTask(fakeTask())
    const clear = () => clearTask()

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <BottomNavigationAction onClick={add} label="Add" icon={<Add />} />
                <BottomNavigationAction onClick={clear} label="Clear" icon={<Clear />} />
            </BottomNavigation>
        </Paper>
    )
}
export default Footer