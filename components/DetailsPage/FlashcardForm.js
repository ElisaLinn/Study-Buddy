import { useState } from "react";
import useSWR from "swr";
import SuccessMessage from "../Messages/SuccessMessage";
import {
  ButtonContainer,
  CollectionTag,
  FlashcardSide,
  FlashcardWrapper,
  FlipContainer,
  QuestionText,
  SubtitleCard,
  SubtitleWrapper,
  TagWrapper,
} from "./FlipFunction/StyledFlippableFlashcard";

import {
  CancelButtonStyled,
  SubmitButtonStyled,
} from "../FlashcardForrms/StyledFlashcardForm";

export default function FlashcardForm({
  onSubmit,
  defaultCollectionId = "",
  showCollectionSelect = false,
  handleCancel,
}) {
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedCollectionId, setSelectedCollectionId] =
    useState(defaultCollectionId);

  const { data: collections } = useSWR("/api/collections");

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError("");
    setSuccessMessage("");

    if (showCollectionSelect && !selectedCollectionId) {
      setSubmitError("Please select a collection.");
      return;
    }

    const formData = new FormData(event.target);
    const flashcardData = Object.fromEntries(formData);

    const cleanedData = {
      question: flashcardData.question,
      answer: flashcardData.answer,
      ...(showCollectionSelect ? { collectionId: selectedCollectionId } : {}),
    };

    try {
      if (onSubmit) {
        await onSubmit(cleanedData);
        setSuccessMessage("A new flashcard has been created!");
        event.target.reset();
        setSelectedCollectionId(defaultCollectionId);
      }
    } catch (error) {
      console.error("Error creating collection:", error);
      setSubmitError("Failed to create a new flashcard.");
    }
  }
  return (
    <>
      {submitError && <p>{submitError}</p>}
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          show={!!successMessage}
          onClose={() => setSuccessMessage("")}
        >
          {successMessage}
        </SuccessMessage>
      )}
      {handleCancel && (
        <CancelButtonStyled onClick={handleCancel}>Cancel</CancelButtonStyled>
      )}
      <FlashcardWrapper>
        <FlipContainer>
          <form onSubmit={handleSubmit}>
            <FlashcardSide className="front">
              <SubtitleWrapper>
                <SubtitleCard>
                  <label htmlFor="question">Question</label>
                </SubtitleCard>
              </SubtitleWrapper>
              <QuestionText>
                <input
                  type="text"
                  id="question"
                  name="question"
                  placeholder="Type in your question"
                  required
                />
              </QuestionText>
            </FlashcardSide>
            <TagWrapper>
              <CollectionTag>
                {" "}
                {showCollectionSelect && (
                  <>
                    <label htmlFor="collection">Collection</label>
                    <select
                      id="collection"
                      value={selectedCollectionId}
                      onChange={(event) =>
                        setSelectedCollectionId(event.target.value)
                      }
                      required
                    >
                      <option value="">Choose a collection...</option>
                      {collections?.map((collection) => (
                        <option key={collection._id} value={collection._id}>
                          {collection.title}
                        </option>
                      ))}
                    </select>
                  </>
                )}
              </CollectionTag>
            </TagWrapper>
          </form>
        </FlipContainer>
      </FlashcardWrapper>
      <FlashcardWrapper>
        <FlipContainer>
          <form onSubmit={handleSubmit}>
            <FlashcardSide className="front">
              <SubtitleWrapper>
                <SubtitleCard>
                  <label htmlFor="answer">Answer</label>
                </SubtitleCard>
              </SubtitleWrapper>
              <QuestionText>
                <input
                  type="text"
                  id="answer"
                  name="answer"
                  placeholder="Type in your answer"
                  required
                />
              </QuestionText>
            </FlashcardSide>
            <TagWrapper>
              <CollectionTag>
                {showCollectionSelect && (
                  <>
                    <label htmlFor="collection">Collection</label>
                    <select
                      id="collection"
                      value={selectedCollectionId}
                      onChange={(event) =>
                        setSelectedCollectionId(event.target.value)
                      }
                      required
                    >
                      <option value="">Choose a collection...</option>
                      {collections?.map((collection) => (
                        <option key={collection._id} value={collection._id}>
                          {collection.title}
                        </option>
                      ))}
                    </select>
                  </>
                )}
              </CollectionTag>
            </TagWrapper>
          </form>{" "}
        </FlipContainer>
      </FlashcardWrapper>
      <ButtonContainer>
        <SubmitButtonStyled type="submit">Submit</SubmitButtonStyled>
      </ButtonContainer>
    </>
  );
}
