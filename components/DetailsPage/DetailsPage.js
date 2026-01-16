import { useState } from "react";
import AddElement from "../AddElement.js/AddElement";
import BackButton from "./BackButton/BackButton";
import FlashcardForm from "../FlashcardForrms/FlashcardForm";
import FlippableFlashcard from "./FlipFunction/FlippableFlashcard";
import { DetailsPageWrapper } from "./StyledDetailsPage";
import { Subtitle, Text } from "../StylingGeneral/StylingGeneral";

import useSWR from "swr";

export default function CollectionDetails({
  collection,
  onDelete,
  onAddFlashcard,
  onDeleteFlashcard,
  onMarkCorrect,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const { data: collections = [] } = useSWR("/api/collections");

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
        <FlashcardForm 
          onSubmit={handleSubmit} 
          onCancel={handleCancel}
          defaultCollectionId={collection._id}
          collection={collection}
        />
        
      </div>
    );
  }

  return (
    <DetailsPageWrapper>
      <BackButton />
      <AddElement onClick={handleEditing} />
      <Subtitle>{collection.title}</Subtitle>
      {collection.flashcards && collection.flashcards.length > 0 && (
        <div>
          <Text>{collection.flashcards.length} created Flashcards</Text>
          {collection.flashcards.map((flashcard) => (
            <FlippableFlashcard
              key={flashcard._id}
              flashcard={flashcard}
              onDelete={onDeleteFlashcard}
              onMarkCorrect={onMarkCorrect}
              onUpdate={onUpdate}
              collections={collections}
            />
          ))}
        </div>
      )}

    </DetailsPageWrapper>
  );
}
