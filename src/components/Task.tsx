import {Button} from "./Buttons.tsx";
import {CheckIcon, PencilIcon, TrashIcon, XIcon} from "@phosphor-icons/react";
import * as React from "react";

export const Task = () => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [taskText, setTaskText] = React.useState("");
    const [isCompleted, setIsCompleted] = React.useState(false);

    function handleDelete() {
        console.log("Delete task");
    }

    function handleEdit() {
        setIsEditing(!isEditing);
    }

    function handleCancel() {
        setIsEditing(false);
    }

    function handleSave() {
        setIsEditing(false);
    }

    function completeTask() {
        if (taskText)
        setIsCompleted(!isCompleted);
    }

    return (
        isEditing ?
            <div className='flex items-center gap-2 w-full rounded-lg border border-solid border-gray-200 bg-white shadow-sm px-2'>
                <input
                    type='text'
                    className='bg-transparent outline-none border-b border-solid border-gray-200 focus:border-pink-base flex-1 px-2 py-1'
                    value={taskText}
                    onChange={e => setTaskText(e.target.value)}
                    autoFocus
                />
                <Button variant='secondary' size='small' onClick={handleCancel}><XIcon className='text-pink-dark'/></Button>
                <Button variant='tertiary' size='small' onClick={handleSave}><CheckIcon className='text-white'/></Button>
            </div>
            :
            <div className='flex items-center gap-2 w-full rounded-lg border border-solid border-gray-200 bg-white shadow-sm px-2'>
                <input type='checkbox' checked={isCompleted} onChange={completeTask} />
                <span
                    className={`flex-1 select-none leading-none ${isCompleted ? 'line-through text-gray-400' : ''}`}
                >
                    {taskText}
                </span>
                <Button size='small' onClick={handleDelete}><TrashIcon/></Button>
                <Button size='small' onClick={handleEdit}><PencilIcon/></Button>
            </div>
    );
};
