import { useState } from "react";
import { AddButton } from "../AddElement.js/StyledAddElement";
import FlippableFlashcard from "../DetailsPage/FlipFunction/FlippableFlashcard";
import { Text } from "../StylingGeneral/StylingGeneral";
import FlashcardForm from "../FlashcardForrms/FlashcardForm";
import { Plus } from "lucide-react";
import LoadingMessage from "../Messages/LoadingMessage";

export default function AllFlashcardsPage({
  flashcards,
  isLoading,
  error,
  onDeleteFlashcard,
  onMarkCorrect,
  onUpdate,
  onAddFlashcard,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing(true);
  }

  function handleSubmit(newFlashcardData) {
    if (onAddFlashcard) {
      onAddFlashcard(newFlashcardData);
      setIsEditing(false);
    }
  }

  function handleCancel() {
    setIsEditing(false);
  }

  if (isLoading) {
    return <LoadingMessage message="Loading flashcards..." show={true} />;
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

  if (isEditing) {
    return (
      <div>
        <FlashcardForm
          onSubmit={handleSubmit}
          buttonText="Create Flashcard"
          showCollectionSelect={true}
          onCancel={handleCancel}
        />
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
      <AddButton onClick={handleEditing}>
        <Plus />
      </AddButton>
      <div>
        {activeFlashcards.map((flashcard) => (
          <FlippableFlashcard
            key={flashcard._id}
            flashcard={flashcard}
            onDelete={onDeleteFlashcard}
            onMarkCorrect={onMarkCorrect}
            onUpdate={onUpdate}
            showCorrectAnimation={true}
          />
        ))}
      </div>
    </div>
  );
}
