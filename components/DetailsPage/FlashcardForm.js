import { useState } from "react";
import useSWR from "swr";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FlashcardForm({
  onSubmit,
  buttonText = "Submit",
  defaultCollectionId = "",
  showCollectionSelect = false,
}) {
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedCollectionId, setSelectedCollectionId] =
    useState(defaultCollectionId);

  const { data: collections } = useSWR("/api/collections", fetcher);

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

      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question</label>
        <input
          type="text"
          id="question"
          name="question"
          placeholder="Type in your question"
          required
        />
        <label htmlFor="answer">Answer</label>
        <input
          type="text"
          id="answer"
          name="answer"
          placeholder="Type in your answer"
          required
        />
        {showCollectionSelect && (
          <>
            <label htmlFor="collection">Collection</label>
            <select
              id="collection"
              value={selectedCollectionId}
              onChange={(event) => setSelectedCollectionId(event.target.value)}
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
        <button type="submit">{buttonText}</button>
      </form>
    </>
  );
}
