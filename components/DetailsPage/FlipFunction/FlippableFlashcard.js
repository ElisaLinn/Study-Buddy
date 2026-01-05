import { useState } from "react";
import DeleteButton from "../../DeleteButton/DeleteButton";
import { AnswerButton, FlashcardWrapper, HideAnswerButton } from "./StyledFlippableFlashcard";

export default function FlippableFlashcard({ flashcard, onDelete }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <FlashcardWrapper>
      {!isFlipped ? (
        <div>
          <h3>Question:</h3>
          <p style={{ fontSize: "18px", margin: "15px 0" }}>
            {flashcard.question}
          </p>
          <AnswerButton
            onClick={handleFlip}
         
          >
            Show Answer
          </AnswerButton>
        </div>
      ) : (
        <div>
          <h3>Question:</h3>
          <p style={{ fontSize: "16px", color: "#666" }}>
            {flashcard.question}
          </p>
          <h3>Antwort:</h3>
          <p style={{ fontSize: "18px", margin: "15px 0", fontWeight: "bold" }}>
            {flashcard.answer}
          </p>
          <HideAnswerButton
            onClick={handleFlip}
          >
            Back
          </HideAnswerButton>
        </div>
      )}

      <div style={{ marginTop: "15px" }}>
        <DeleteButton id={flashcard._id} onDelete={onDelete} />
      </div>
    </FlashcardWrapper>
  );
}
