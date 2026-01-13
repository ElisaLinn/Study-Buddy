import { useState } from "react";
import useSWR from "swr";
import { Select, SaveButton, CancelButton } from "./StyledEditFlashcardModal";

import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  Form,
  Input,
  ButtonGroup,
  DeleteSection,
} from "./EditCollectionModal/StyledEditCollectionModal";
import { Trash2, X } from "lucide-react";
import { DeleteButtonStyled } from "../DeleteButton/StyledDeleteButton";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

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
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const handleClose = () => {
    setQuestion(flashcard.question);
    setAnswer(flashcard.answer);
    setSelectedCollectionId(flashcard.collectionId);
    onClose();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <h2>Edit Flashcard</h2>
          <CloseButton onClick={handleClose}>
            <X />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <Form>
            <label htmlFor="question">Question:</label>
            <Input
              id="question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              rows={3}
              placeholder="What´s your Question"
            />
          </Form>
        </ModalBody>

        <ModalBody>
          <Form>
            <label htmlFor="answer">Answer:</label>
            <Input
              id="answer"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              rows={4}
              placeholder="What´s your Answer"
            />
          </Form>
        </ModalBody>

        <ModalBody>
          <Form>
            <label htmlFor="collection">Collection:</label>
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
          </Form>
        </ModalBody>

        <section>
          {showDeleteConfirm ? (
            <ModalBody>
              <DeleteSection>
                <p>Delete this flashcard?</p>
                <section>
                  <DeleteButtonStyled onClick={handleCancelDelete}>
                    Cancel
                  </DeleteButtonStyled>
                  <DeleteButtonStyled onClick={handleDelete}>
                    Delete
                  </DeleteButtonStyled>
                </section>
              </DeleteSection>
            </ModalBody>
          ) : (
            <>
              <ModalBody>
                <DeleteSection>
                  <h3>Danger Zone</h3>
                  <p>The Flashcard will not appear again</p>
                  <DeleteButtonStyled onClick={handleDeleteClick}>
                    <Trash2 />
                  </DeleteButtonStyled>
                </DeleteSection>
              </ModalBody>
              <ModalFooter>
                <ButtonGroup>
                  <CancelButton onClick={handleClose}>Quit</CancelButton>
                  <SaveButton onClick={handleSave}>Save</SaveButton>
                </ButtonGroup>
              </ModalFooter>
            </>
          )}
        </section>
      </ModalContent>
    </ModalWrapper>
  );
}
