import faker from "@faker-js/faker";
import { createContext, useContext, useMemo, useState } from "react";
import { Project } from "../interfaces/project";
import { Task } from "../interfaces/task";
import { WrapperProps } from "../interfaces/wrapperProps";

interface FakeContextInterface {
    projects: Array<Project>,
    setProjects: Function,
    tasks: Array<Task>,
    setTasks: Function,
}

const fakeProject = (): Project => {
    const id: string = faker.unique(faker.datatype.uuid)
    const title: string = faker.company.companyName()
    const image: string = faker.image.business(640, 480, true)
    const description: string = faker.lorem.lines(5)
    const project: Project = {
        id,
        title,
        image,
        description,
    }
    return project
}

const fakeTask = (projects: Project[]): Task => {

    const id: string = faker.unique(faker.datatype.uuid)
    const title: string = faker.company.companyName()
    const description: string = faker.lorem.lines(5)
    const project: string = faker.random.arrayElement(projects).id

    const task: Task = {
        id,
        title,
        description,
        project
    }

    return task
}

const FakeContext = createContext<FakeContextInterface>({
    projects: [],
    setProjects: () => { },
    tasks: [],
    setTasks: () => { }
})

const FakeWrapper = ({ children }: WrapperProps) => {
    const [projects, setProjects] = useState(faker.helpers.uniqueArray<Project>(fakeProject, faker.datatype.number({min:2, max:15})))
    const [tasks, setTasks] = useState(faker.helpers.uniqueArray<Task>(() => fakeTask(projects), faker.datatype.number(50)))
    const data = useMemo(() => ({
        projects,
        setProjects,
        tasks,
        setTasks
    }), [projects, tasks])
    return (
        <FakeContext.Provider value={data}>
            {children}
        </FakeContext.Provider >
    )
}

const useFakeContext = () => {
    return useContext(FakeContext)
}

export { FakeContext, FakeWrapper, useFakeContext }