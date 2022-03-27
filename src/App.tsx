import { Folder, Home, Task } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Navigation from './components/navigation';
import Projects from './components/projects';
import Tasks from './components/tasks';
import { ThemeWrapper } from './context/themeContext';
import { Page } from './interfaces/page';



const pages: Array<Page> = [
    {
        title: 'Dashboard',
        path: '/',
        icon: Home,
        element: <Dashboard />
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: Folder,
        element: <Projects />
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: Task,
        element: <Tasks />
    },
]

function App() {
    return (
        <ThemeWrapper>
            <Navigation pages={pages}>
                <Routes>
                    {pages.map((page, index) => (
                        <Route key={index} path={page.path} element={page.element} />
                    ))}
                </Routes>
            </Navigation>
        </ThemeWrapper>
    );
}

export default App;
