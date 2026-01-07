import { useState } from "react";
import EditFlashcardModal from "../../EditFlashcardModal/EditFlashcardModal";
import {
  AnswerButton,
  FlashcardWrapper,
  HideAnswerButton,
  QuestionText,
  ButtonContainer,
  CorrectButton,
  IncorrectButton,
  CorrectBadge,
  EditButton,
} from "./StyledFlippableFlashcard";

export default function FlippableFlashcard({
  flashcard,
  onDelete,
  onMarkCorrect,
  onUpdate,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function handleEdit() {
    setIsEditModalOpen(true);
  }

  const handleSave = (id, updatedData) => {
    return fetch(`/api/flashcards/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update flashcard");
      }
      return response;
    })
    .then(() => {
    
      if (onUpdate) {
        onUpdate();
      }
    })
    .catch((error) => {
      console.error("Error updating flashcard:", error);
      throw error; 
    });
  };

  function handleMarkCorrect() {
    if (onMarkCorrect) {
      onMarkCorrect(flashcard._id, true)
      .then(() => {
        setIsFlipped(false);
      })
      .catch((error) => {
        console.error("Error marking as correct:", error);
      });
    }
  }

  function handleMarkIncorrect() {
    if (onMarkCorrect) {
      onMarkCorrect(flashcard._id, false)
      .then(() => {
        setIsFlipped(false);
      })
      .catch((error) => {
        console.error("Error marking as incorrect:", error);
      });
    }
  }

  return (
    <FlashcardWrapper isCorrect={flashcard.isCorrect}>
      {flashcard.isCorrect && <CorrectBadge>✓</CorrectBadge>}

      {!isFlipped ? (
        <div>
          <h3>Question:</h3>
          <QuestionText>{flashcard.question}</QuestionText>
          <AnswerButton onClick={handleFlip}>Show Answer</AnswerButton>
        </div>
      ) : (
        <div>
          <h3>Question:</h3>
          <p>{flashcard.question}</p>
          <h3>Antwort:</h3>
          <p>{flashcard.answer}</p>
          <ButtonContainer>
            <HideAnswerButton onClick={handleFlip}>Back</HideAnswerButton>
            <IncorrectButton onClick={handleMarkIncorrect}>
              Incorrect
            </IncorrectButton>
            <CorrectButton onClick={handleMarkCorrect}>Correct</CorrectButton>
          </ButtonContainer>
        </div>
      )}

      <EditButton onClick={handleEdit}>Edit</EditButton>

      <EditFlashcardModal
        flashcard={flashcard}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
        onDelete={onDelete}
      />
    </FlashcardWrapper>
  );
}
