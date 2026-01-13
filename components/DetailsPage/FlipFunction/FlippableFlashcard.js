import { useState } from "react";
import useSWR from "swr";
import EditFlashcardModal from "../../Edit/EditFlashcardModal";
import {
  AnswerButton,
  FlashcardWrapper,
  FlipContainer,
  FlashcardSide,
  HideAnswerButton,
  QuestionText,
  ButtonContainer,
  CorrectButton,
  IncorrectButton,
  CorrectBadge,
  EditButton,
  CollectionTag,
  CollectionTagStyled,
  TagWrapper,
  AnswerText,
  SubtitleWrapper,
  SubtitleCard,
  RemoveCardButton,
} from "./StyledFlippableFlashcard";
import { Ellipsis, Pencil, X } from "lucide-react";
import { Subtitle, Text } from "@/components/StylingGeneral/StylingGeneral";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FlippableFlashcard({
  flashcard,
  onDelete,
  onMarkCorrect,
  onUpdate,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { data: collections } = useSWR("/api/collections", fetcher);

  const collection = collections?.find(
    (col) => col._id === flashcard.collectionId
  );

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
    <>
      <FlashcardWrapper isFlipped={isFlipped}>
        <FlipContainer isFlipped={isFlipped} isCorrect={flashcard.isCorrect}>
          <FlashcardSide className="front" isCorrect={flashcard.isCorrect}>
            {flashcard.isCorrect && <CorrectBadge>✓</CorrectBadge>}
            <SubtitleWrapper>
            <SubtitleCard>Question:</SubtitleCard>
             <RemoveCardButton onClick={handleMarkIncorrect}>
              <X/>
              </RemoveCardButton>
            </SubtitleWrapper>
            <QuestionText>{flashcard.question}</QuestionText>
            <ButtonContainer>
              <AnswerButton onClick={handleFlip}>Show Answer</AnswerButton>
            </ButtonContainer>
            <EditButton onClick={handleEdit}>
              <Ellipsis />
            </EditButton>
            <TagWrapper>
              {collection && <CollectionTag>{collection.title}</CollectionTag>}
            </TagWrapper>
          </FlashcardSide>

          <FlashcardSide className="back" isCorrect={flashcard.isCorrect}>
            {flashcard.isCorrect && <CorrectBadge>✓</CorrectBadge>}
             <SubtitleWrapper>
            <SubtitleCard>Answer:</SubtitleCard>
            </SubtitleWrapper>
            <AnswerText>{flashcard.answer}</AnswerText>
            <ButtonContainer>
              <HideAnswerButton onClick={handleFlip}>Flip Back</HideAnswerButton>
            </ButtonContainer>
            <ButtonContainer>
              <IncorrectButton onClick={handleMarkIncorrect}>
                Incorrect
              </IncorrectButton>
              <CorrectButton onClick={handleMarkCorrect}>Correct</CorrectButton>
            </ButtonContainer>
            <EditButton onClick={handleEdit}>
              <Ellipsis />
            </EditButton>
            <TagWrapper>
              {collection && <CollectionTag>{collection.title}</CollectionTag>}
            </TagWrapper>
          </FlashcardSide>
        </FlipContainer>
      </FlashcardWrapper>

      <EditFlashcardModal
        flashcard={flashcard}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
        onDelete={onDelete}
      />
    </>
  );
}
