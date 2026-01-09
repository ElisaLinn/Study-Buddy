import { useState } from "react";
import AddElement from "../AddElement.js/AddElement";
import BackButton from "./BackButton/BackButton";
import FlashcardForm from "./FlashcardForm";
import FlippableFlashcard from "./FlipFunction/FlippableFlashcard";
import { DetailsPageWrapper} from "./StyledDetailsPage";

export default function CollectionDetails({
  collection,
  onDelete,
  onAddFlashcard,
  onDeleteFlashcard,
  onMarkCorrect,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingFlashcard, setEditingFlashcard] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!collection) {
    return <p>No collection data available</p>;
  }
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

  function handleEditFlashcard(flashcard) {
    setEditingFlashcard(flashcard);
    setIsEditModalOpen(true);
  }

  async function handleUpdateFlashcard(id, updatedData) {
    try {
      const response = await fetch(`/api/flashcards/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update flashcard");
      }

      // Refresh the collection data
      if (onUpdate) {
        onUpdate();
      }
    } catch (error) {
      console.error("Error updating flashcard:", error);
      throw error;
    }
  }

  if (isEditing) {
    return (
      <div>
        <FlashcardForm onSubmit={handleSubmit} buttonText="Create Collection" />
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }

  return (
    <DetailsPageWrapper>
      <BackButton />
      <AddElement onClick={handleEditing} />
      <h1>{collection.title}</h1>

      {collection.flashcards && collection.flashcards.length > 0 && (
        <div>
          <h2>Flashcards:</h2>
          {collection.flashcards.map((flashcard) => (
            <FlippableFlashcard
              key={flashcard._id}
              flashcard={flashcard}
              onDelete={onDeleteFlashcard}
              onMarkCorrect={onMarkCorrect}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      )}

      <button onClick={onDelete}>Delete Collection</button>
      
      
    </DetailsPageWrapper>
  );
}
