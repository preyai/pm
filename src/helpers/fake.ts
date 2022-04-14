import faker from "@faker-js/faker";
import ITask from "../interfaces/ITask"

export const fakeTask = () => {
    const task: ITask = {
        id: faker.unique(faker.datatype.uuid),
        title: faker.word.adjective(),
        text: faker.lorem.lines(3)
    }
    return task
}