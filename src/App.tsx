import { Folder, Home, Task } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Route, Routes,Outlet } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Navigation from './components/navigation';
import Projects from './components/projects';
import ProjectPage from './components/projects/projectPage';
import Tasks from './components/tasks';
import { FakeWrapper } from './context/fakeContext';
import { ThemeWrapper } from './context/themeContext';
import { MenuPage, Page } from './interfaces/page';



const pages: Array<MenuPage> = [
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
        element: <Projects />,
        pages: [{
            path: ':id',
            element: <ProjectPage />
        }]
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: Task,
        element: <Tasks />
    },
]

const Wrapp = () => {
    return(
        <Box>
            <Outlet />
        </Box>
    )
}

function App() {
    return (
        <ThemeWrapper>
            <FakeWrapper>

                <Routes>
                    <Route path='/' element={<Navigation pages={pages} />}>
                        <Route index element={<Dashboard />} />
                        <Route path='projects' element={<Wrapp />}>
                            <Route index element={<Projects />} />
                            <Route path=':id' element={<ProjectPage />} />
                        </Route>
                        <Route path='tasks' element={<Wrapp />}>
                            <Route index element={<Tasks />} />
                            {/* <Route path=':id' element={<ProjectPage />} /> */}
                        </Route>
                    </Route>
                    {/* {pages.map((page, index) => (
                            <Route key={index} path={page.path} element={page.element}>
                                {page.pages?.map((subpage, index)=>(
                                    <Route key={index} path={subpage.path} element={subpage.element} />
                                ))}
                            </Route>
                        ))} */}
                </Routes>
            </FakeWrapper>
        </ThemeWrapper>
    );
}

export default App;
