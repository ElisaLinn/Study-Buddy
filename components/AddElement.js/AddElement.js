import { Plus } from "lucide-react";
import { AddButton } from "./StyledAddElement";

export default function AddElement({ onClick }){
    return(
        <AddButton onClick={onClick}><Plus/></AddButton>
    )
}