import Link from "next/link";
import { CollectionWrapper } from "./StyledCollection";

export default function CollectionCard({_id, title}){
    return(
        <CollectionWrapper>
           <Link href={`/${_id}`}>
        <p>{title}</p>
        </Link> 
        </CollectionWrapper>
    )
}