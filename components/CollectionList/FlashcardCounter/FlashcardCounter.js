export default function FlashcardCounter({ count }) {
    const displayText = count === 1 ? "1 Flashcard" : `${count} Flashcards`;
    
    return (
        <span>{displayText}</span>
    );
}