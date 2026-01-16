import { ArrowBigLeft } from "lucide-react";
import { BackLink } from "@/components/StylingGeneral/StylingGeneral";



export default function BackButton (){
    return(
        <BackLink href="/" aria-label="Back to Activities">
         <ArrowBigLeft/>
            </BackLink>
    );
}
