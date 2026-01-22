import { useLocalStorage } from "usehooks-ts";
import { type Task, TASKS_KEY, TaskStatus } from "../models/task";
import { useState } from "react";

export default function useTasks() {
    const [storedTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getTasks() {
        if (isLoading) return;

        setIsLoading(true);
        setTasks(storedTasks);
        setIsLoading(false);
    }

    return {
        tasks,
        createdTasks: tasks.length,
        concludedTasks: tasks.filter(
            task => task.status === TaskStatus.COMPLETED
        ).length,
        isLoading,
        getTasks
    };
}
