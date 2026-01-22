import {useLocalStorage} from "usehooks-ts";
import {TASKS_KEY, type Task, TaskStatus, TaskState} from "../models/task.ts";
import {useState} from "react";
import useTasks from "./useTasks.ts";


export default function useTask() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const {createdTasks, concludedTasks, totalTasks} = useTasks();

    function prepareTask(){
        setTasks([
            ...tasks,
            {
                id: Math.random().toString(36).substring(2, 9),
                title: "",
                status: TaskStatus.PENDING,
                state: TaskState.CREATING,
            },
        ]);
    }

    async function updateTask(id: string, payload: { title: Task["title"] }) {
        setIsUpdating(true);

        // await delay(1000);

        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        state: TaskState.CREATED,
                        ...payload,
                    }
                    : task
            )
        );

        setIsUpdating(false);
    }

    function updateTaskStatus(id: string, concluded: boolean) {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        status: concluded ? TaskStatus.COMPLETED : TaskStatus.PENDING,
                    }
                    : task
            )
        );
    }

    async function deleteTask(id: string) {
        setIsDeleting(true);
        // await delay(1000);
        setTasks(tasks.filter((task) => task.id !== id));
        setIsDeleting(false);
    }

    return {
        tasks,
        isUpdating,
        isDeleting,
        prepareTask,
        updateTask,
        updateTaskStatus,
        deleteTask,
        createdTasks,
        concludedTasks,
        totalTasks
    }

}