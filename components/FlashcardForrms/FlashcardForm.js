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
} from "../DetailsPage/FlipFunction/StyledFlippableFlashcard";

import {
  CancelButtonStyled,
  InputField,
  SelectCategory,
  SubmitButtonStyled,
} from "./StyledFlashcardForm";
import ErrorMessage from "../Messages/ErrorMessage";
import { ArrowBigLeft } from "lucide-react";
import { Text } from "../StylingGeneral/StylingGeneral";

export default function FlashcardForm({
  onSubmit,
  defaultCollectionId = "",
  showCollectionSelect = false,
  onCancel,
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

    const formData = new FormData(event.target);
    const flashcardData = Object.fromEntries(formData);

    if (!flashcardData.question || flashcardData.question === "") {
      setSubmitError("Please type in your Question");
      return;
    }

    if (!flashcardData.answer || flashcardData.answer === "") {
      setSubmitError("Please type in your Answer");
      return;
    }

    if (showCollectionSelect && !selectedCollectionId) {
      setSubmitError("Please select a collection.");
      return;
    }

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
      {submitError && (
        <ErrorMessage message={submitError} show={!!submitError}>
          {submitError}
        </ErrorMessage>
      )}
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          show={!!successMessage}
          onClose={() => setSuccessMessage("")}
        >
          {successMessage}
        </SuccessMessage>
      )}
      <CancelButtonStyled onClick={onCancel}>
        <ArrowBigLeft />
      </CancelButtonStyled>
      <Text>Create a new Flashcard</Text>
      <form onSubmit={handleSubmit} noValidate>
        <FlashcardWrapper>
          <FlipContainer>
            <FlashcardSide className="front">
              <SubtitleWrapper>
                <SubtitleCard>
                  <label htmlFor="question">Question</label>
                </SubtitleCard>
              </SubtitleWrapper>
              <QuestionText>
                <InputField
                  type="text"
                  id="question"
                  name="question"
                  placeholder="Type in your question..."
                />
              </QuestionText>
            </FlashcardSide>
            <TagWrapper>
              <CollectionTag>
                {" "}
                {showCollectionSelect && (
                  <>
                    <SelectCategory
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
                    </SelectCategory>
                  </>
                )}
              </CollectionTag>
            </TagWrapper>
          </FlipContainer>
        </FlashcardWrapper>
        <FlashcardWrapper>
          <FlipContainer>
            <FlashcardSide className="front">
              <SubtitleWrapper>
                <SubtitleCard>
                  <label htmlFor="answer">Answer</label>
                </SubtitleCard>
              </SubtitleWrapper>
              <QuestionText>
                <InputField
                  type="text"
                  id="answer"
                  name="answer"
                  placeholder="Type in your answer..."
                />
              </QuestionText>
            </FlashcardSide>
            <TagWrapper>
              <CollectionTag>
                {showCollectionSelect && (
                  <>
                    <SelectCategory
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
                    </SelectCategory>
                  </>
                )}
              </CollectionTag>
            </TagWrapper>
          </FlipContainer>
        </FlashcardWrapper>
        <ButtonContainer>
          <SubmitButtonStyled type="submit">Submit</SubmitButtonStyled>
        </ButtonContainer>
      </form>
    </>
  );
}
