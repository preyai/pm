import { BottomNavigation, BottomNavigationAction, Container, Paper } from "@mui/material";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const App = () => {

    return (
        <>
            <Container>
                <TaskList />
            </Container>
            <Footer />
        </>
    )
}

export default App