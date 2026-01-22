import Text from "../components/Text.tsx";
import Badge from "../components/Badge.tsx";
import {Button} from "../components/Buttons.tsx";
import {CircleDashedIcon} from "@phosphor-icons/react";
import {TaskItem} from "../components/TaskItem.tsx";

export default function PageComponents() {
    return (
        <div>
            <Text>Hello World!</Text>
            <br></br>
            <Badge variant={"green"}>5</Badge>
            <Button><CircleDashedIcon/> Test button</Button>
            <TaskItem></TaskItem>
        </div>
    );
};
