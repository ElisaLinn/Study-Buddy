import { useState } from "react";
import DeleteButton from "../../DeleteButton/DeleteButton";
import {
  AnswerButton,
  FlashcardWrapper,
  HideAnswerButton,
  QuestionText,
  ButtonContainer,
  CorrectButton,
  IncorrectButton,
  CorrectBadge,
} from "./StyledFlippableFlashcard";

export default function FlippableFlashcard({
  flashcard,
  onDelete,
  onMarkCorrect,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  async function handleMarkCorrect() {
    if (onMarkCorrect) {
      await onMarkCorrect(flashcard._id, true);
      setIsFlipped(false);
    }
  }

  async function handleMarkIncorrect() {
    if (onMarkCorrect) {
      await onMarkCorrect(flashcard._id, false);
      setIsFlipped(false);
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
      <div>
        <DeleteButton id={flashcard._id} onDelete={onDelete} />
      </div>
    </FlashcardWrapper>
  );
}
