import Link from "next/link";
import { StyledFlashCardCounterLink } from "./StyledFlashCardCounter";

export default function CorrectFlashcardCounter({ correctCount, totalCount, collectionId }) {
    if (correctCount === 0) {
        return (
            <span>
              {correctCount} correct from {totalCount}
            </span>
        );
    }
    
    return (
        <StyledFlashCardCounterLink  
            href={`/archive?collection=${collectionId}`}
            
        >
            {correctCount} correct from {totalCount}
        </StyledFlashCardCounterLink >
    );
}