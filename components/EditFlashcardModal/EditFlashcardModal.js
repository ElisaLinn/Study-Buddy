import { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  FormGroup,
  Label,
  Textarea,
  ButtonGroup,
  SaveButton,
  CancelButton,
  DeleteButton,
} from "./StyledEditFlashcardModal";

export default function EditFlashcardModal({
  flashcard,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) {
  const [question, setQuestion] = useState(flashcard?.question || "");
  const [answer, setAnswer] = useState(flashcard?.answer || "");

  if (!isOpen || !flashcard) return null;

  const handleSave = () => {
    if (!question || !answer) {
      alert("Bitte fülle alle Felder aus");
      return;
    }

    onSave(flashcard._id, {
      question: question,
      answer: answer,
    });
    onClose();
  };

  const handleDelete = () => {
    onDelete(flashcard._id);
    onClose();
  };

  const handleClose = () => {
  
    setQuestion(flashcard.question);
    setAnswer(flashcard.answer);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>Edit Flashcard</h2>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
        </ModalHeader>

        <FormGroup>
          <Label htmlFor="question">Qustion:</Label>
          <Textarea
            id="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            rows={3}
            placeholder="What´s your Question"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="answer">Answer:</Label>
          <Textarea
            id="answer"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            rows={4}
            placeholder="What´s your Answer"
          />
        </FormGroup>

        <ButtonGroup>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          <div>
            <CancelButton onClick={handleClose}>Quit</CancelButton>
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </div>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
}
