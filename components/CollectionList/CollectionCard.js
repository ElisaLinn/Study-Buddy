import Link from "next/link";
import { CollectionWrapper } from "./StyledCollection";
import FlashcardCounter from "./FlashcardCounter/FlashcardCounter";

export default function CollectionCard({_id, title, flashcardCount}){
    return(
        <CollectionWrapper>
           <Link href={`/${_id}`}>
                <p>{title}</p>
                <FlashcardCounter count={flashcardCount || 0} />
            </Link> 
        </CollectionWrapper>
    )
}