import Text from "../components/Text.tsx";
import Badge from "../components/Badge.tsx";
import {Button} from "../components/Buttons.tsx";
import {CircleDashedIcon} from "@phosphor-icons/react";
import {Task} from "../components/Task.tsx";

export default function PageComponents() {
    return (
        <div>
            <Text>Hello World!</Text>
            <br></br>
            <Badge variant={"green"}>5</Badge>
            <Button><CircleDashedIcon/> Test button</Button>
            <Task></Task>
        </div>
    );
};
