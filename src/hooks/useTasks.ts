import { useLocalStorage } from "usehooks-ts";
import { type Task, TASKS_KEY, TaskStatus, TaskState } from "../models/task";

export default function useTasks() {
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

    const createdTasks = tasks.filter(task => task.state === TaskState.CREATED).length;
    const concludedTasks = tasks.filter(task => task.status === TaskStatus.COMPLETED).length;
    const totalTasks = tasks.filter(task => task.state !== TaskState.CREATING).length;

    return {
        tasks,
        createdTasks,
        concludedTasks,
        totalTasks
    };
}
