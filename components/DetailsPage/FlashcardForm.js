import { useState } from "react";

export default function FlashcardForm({ onSubmit, buttonText = "Submit" }) {
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError("");
    setSuccessMessage("");

    const formData = new FormData(event.target);
    const flashcardData = Object.fromEntries(formData);

    const cleanedData = {
      question: flashcardData.question,
      answer: flashcardData.answer,
    };

    try {
      if (onSubmit) {
        await onSubmit(cleanedData);
        setSuccessMessage("A new flashcard has been created!");
        event.target.reset();
      }
    } catch (error) {
      console.error("Error creating collection:", error);
      setSubmitError("Failed to create a new flashcard.");
    }
  }
  return (
    <>
      {submitError && <p style={{ color: "red" }}>{submitError}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

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
        <button type="submit">{buttonText}</button>
      </form>
    </>
  );
}
