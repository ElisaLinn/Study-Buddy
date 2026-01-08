export default function CorrectFlashcardCounter({ correctCount, totalCount }) {
    return (
        <span>
          {correctCount} correct from {totalCount}
        </span>
    );
}