import Link from "next/link";
import { CollectionWrapper } from "./StyledCollection";
import FlashcardCounter from "./FlashcardCounter/FlashcardCounter";
import CorrectFlashcardCounter from "./CorrectFlashcardCounter/CorrectFlashcardCounter";

export default function CollectionCard({_id, title, flashcardCount, correctCount}){
    return(
        <CollectionWrapper>
           <Link href={`/${_id}`}>
                <p>{title}</p>
                <div>
                    <p>
                    <FlashcardCounter count={flashcardCount} />
                    </p>
                    <p>
                    <CorrectFlashcardCounter 
                        correctCount={correctCount} 
                        totalCount={flashcardCount}
                        collectionId={_id}
                    />
                    </p>
                </div>
            </Link> 
        </CollectionWrapper>
    )
}