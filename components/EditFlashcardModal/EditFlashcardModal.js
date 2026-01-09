import { useState } from "react";
import useSWR from "swr";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  FormGroup,
  Label,
  Textarea,
  Select,
  ButtonGroup,
  SaveButton,
  CancelButton,
  DeleteButton,
} from "./StyledEditFlashcardModal";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EditFlashcardModal({
  flashcard,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) {
  const [question, setQuestion] = useState(flashcard?.question || "");
  const [answer, setAnswer] = useState(flashcard?.answer || "");
  const [selectedCollectionId, setSelectedCollectionId] = useState(
    flashcard?.collectionId || ""
  );

  const { data: collections } = useSWR("/api/collections", fetcher);

  if (!isOpen || !flashcard) return null;

  const handleSave = () => {
    if (!question || !answer || !selectedCollectionId) {
      alert("Please fill up");
      return;
    }

    onSave(flashcard._id, {
      question: question,
      answer: answer,
      collectionId: selectedCollectionId,
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
    setSelectedCollectionId(flashcard.collectionId);
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
          <Label htmlFor="question">Question:</Label>
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

        <FormGroup>
          <Label htmlFor="collection">Collection:</Label>
          <Select
            id="collection"
            value={selectedCollectionId}
            onChange={(event) => setSelectedCollectionId(event.target.value)}
          >
            <option value="">Choose a collection...</option>
            {collections?.map((collection) => (
              <option key={collection._id} value={collection._id}>
                {collection.title}
              </option>
            ))}
          </Select>
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
