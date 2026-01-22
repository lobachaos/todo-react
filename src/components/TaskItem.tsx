import {Button} from "./Buttons.tsx";
import {CheckIcon, PencilIcon, TrashIcon, XIcon} from "@phosphor-icons/react";
import * as React from "react";
import type {Task} from "../models/task.ts";
import useTask from "../hooks/useTask.ts";

interface TaskItemProps {
    task: Task
}


export const TaskItem = ({task}: TaskItemProps) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [taskText, setTaskText] = React.useState(task.title);
    const {updateTask, deleteTask, updateTaskStatus} = useTask();

    function handleDelete() {
        deleteTask(task.id);
    }

    function handleExitEdit() {
        setIsEditing(false);
        if (task.state === 'CREATING') {
            deleteTask(task.id);
        }
    }

    function handleEdit() {
        setIsEditing(true);
        setTaskText(task.title);
    }

    function handleSave(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateTask(task.id, {title: taskText});
        setIsEditing(false);
    }

    function completeTask(e: React.ChangeEvent<HTMLInputElement>) {
        updateTaskStatus(task.id, e.currentTarget.checked);
    }

    return (
        task.state === 'CREATING' || isEditing ?
            <form className="w-full" onSubmit={handleSave}>
                <div
                    className='flex items-center gap-2 w-full rounded-lg bg-white shadow-sm px-4 py-4'>
                    <input
                        type='text'
                        className='bg-transparent outline-none border-b border-solid border-gray-200 focus:border-pink-base flex-1 px-2 py-1'
                        value={taskText}
                        onChange={e => setTaskText(e.target.value)}
                        autoFocus
                        required
                    />
                    <Button type="button" variant='secondary' size='small' onClick={handleExitEdit}>
                        <XIcon className='text-pink-dark'/>
                    </Button>
                    <Button type="submit" variant='tertiary' size='small'><CheckIcon
                        className='text-white'/></Button>
                </div>
            </form>
            :

            <div
                className='flex items-center gap-2 w-full rounded-lg  bg-white shadow-sm px-4 py-4'>
                <input type='checkbox' checked={task.status === 'COMPLETED'} onChange={completeTask}
                          className='w-4 h-4 cursor-pointer accent-green-base border-green-base'
                />
                <span
                    className={`flex-1 select-none leading-relaxed ${task.status === 'COMPLETED' ? 'line-through text-gray-400' : ''}`}
                >
                    {task.title}
                </span>
                <Button size='small' onClick={handleDelete}><TrashIcon/></Button>
                <Button size='small' onClick={handleEdit}><PencilIcon/></Button>
            </div>
    );
};
