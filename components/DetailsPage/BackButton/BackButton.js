import Link from "next/link"
import { StyledBackButton } from "./StyledBackButton";



export default function BackButton (){
    return(
        <StyledBackButton href="/" aria-label="Back to Activities">
         Back
            </StyledBackButton>
    );
}
