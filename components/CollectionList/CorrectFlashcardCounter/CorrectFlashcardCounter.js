import Link from "next/link";

export default function CorrectFlashcardCounter({ correctCount, totalCount, collectionId }) {
    if (correctCount === 0) {
        return (
            <span>
              {correctCount} correct from {totalCount}
            </span>
        );
    }
    
    return (
        <Link 
            href={`/archive?collection=${collectionId}`}
            
        >
            {correctCount} correct from {totalCount}
        </Link>
    );
}