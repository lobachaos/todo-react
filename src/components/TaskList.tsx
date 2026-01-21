import {Task} from "./Task.tsx";
import {Button} from "./Buttons.tsx";
import {PlusIcon} from "@phosphor-icons/react";

export const TaskList = () => {
    return (
        <div className="flex w-full flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <section className="flex flex-col items-center">
                <Button><PlusIcon className="mr-2"/>Adicionar Nova Tarefa</Button>
            </section>
            <section>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </section>
        </div>
    );
};
