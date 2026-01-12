import FlippableFlashcard from "../DetailsPage/FlipFunction/FlippableFlashcard";
import { Text } from "../StylingGeneral/StylingGeneral";

export default function AllFlashcardsPage({
  flashcards,
  isLoading,
  error,
  onDeleteFlashcard,
  onMarkCorrect,
  onUpdate,
}) {
  if (isLoading) {
    return <h1>Loading flashcards...</h1>;
  }

  if (error) {
    return <h1>Error loading flashcards</h1>;
  }

  if (!flashcards || flashcards.length === 0) {
    return (
      <div>
        <h1>All Flashcards</h1>
        <p>No Flashcard found.</p>
      </div>
    );
  }

  const activeFlashcards = flashcards.filter(
    (flashcard) => !flashcard.isCorrect
  );

  if (activeFlashcards.length === 0) {
    return (
      <div>
        <h1>All Flashcards</h1>
        <p>All Flashcard are achivaded! Look at archive.</p>
      </div>
    );
  }

  return (
    <div>
      <Text>{activeFlashcards.length} Flashcards are left</Text>
      <div>
        {activeFlashcards.map((flashcard) => (
          <FlippableFlashcard
            key={flashcard._id}
            flashcard={flashcard}
            onDelete={onDeleteFlashcard}
            onMarkCorrect={onMarkCorrect}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
}
