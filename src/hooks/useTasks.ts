import { useDispatch, useSelector } from "react-redux";
import ITask from "../interfaces/ITask";
import { RootState } from "../redux/store";
import { addTask, removeTask } from "../redux/tasks/tasksSlice";

const useTasks = () => {
    const tasks = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();

    const _addTask = (task: ITask) => dispatch(addTask(task))
    const _removeTask = (taskId: string) => dispatch(removeTask(taskId))

    return { tasks, addTask: _addTask, removeTask: _removeTask }
}

export default useTasks