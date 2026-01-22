import {TaskItem} from "./TaskItem.tsx";
import {Button} from "./Buttons.tsx";
import {PlusIcon} from "@phosphor-icons/react";
import {type Task, TaskState} from "../models/task.ts";
import Badge from "./Badge.tsx";
import useTask from "../hooks/useTask.ts";

export const TaskList = () => {
    const {tasks, prepareTask, createdTasks, concludedTasks, totalTasks} = useTask();

    function handleNewTask() {
        prepareTask();
    }

    return (
        <div className="flex w-full flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-row items-center gap-2">
                    <p>Tarefas criadas</p>
                    <Badge variant="pink">{createdTasks}</Badge>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <p>Concluídas</p>
                    <Badge variant="green">{concludedTasks} de {totalTasks}</Badge>
                </div>
            </div>
            <section className="flex flex-col items-center">
                <Button onClick={handleNewTask} disabled={tasks.some(
                    task => task.state === TaskState.CREATING
                )}>
                    <PlusIcon className="mr-2"/>Adicionar Nova Tarefa
                </Button>
            </section>
            <section className={`flex flex-col items-center gap-4`}>
                {tasks.map((task: Task) => (
                    <TaskItem key={task.id} task={task}/>
                ))}
            </section>
        </div>
    );
};
