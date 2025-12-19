import { useState } from "react";
import AddElement from "../AddElement.js/AddElement";
import BackButton from "./BackButton/BackButton";
import FlashcardForm from "./FlashcardForm";
import { DetailsPageWrapper, FlashcardWrapper } from "./StyledDetailsPage";
import DeleteButton from "../DeleteButton/DeleteButton";

export default function CollectionDetails({
  collection,
  onDelete,
  onAddFlashcard,
  onDeleteFlashcard,
}) {
  const [isEditing, setIsEditing] = useState(false);

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
            <FlashcardWrapper key={flashcard._id}>
              <h3>Question:</h3>
              <p>{flashcard.question}</p>
              <h3>Answer:</h3>
              <p>{flashcard.answer}</p>
              <DeleteButton id={flashcard._id} onDelete={onDeleteFlashcard}/>
            </FlashcardWrapper>
          ))}
        </div>
      )}

      <button onClick={onDelete}>Delete Collection</button>
    </DetailsPageWrapper>
  );
}
