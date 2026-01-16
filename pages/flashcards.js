import useSWR from "swr";
import { useState } from "react";
import AllFlashcardsPage from "@/components/FlashcardsPage/FlashcardsPage";
import SuccessMessage from "@/components/Messages/SuccessMessage";

export default function FlashcardsPage() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    data: flashcards,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/flashcards");

  async function handleMarkCorrect(flashcardId, isCorrect) {
    try {
      const response = await fetch(`/api/flashcards/${flashcardId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCorrect }),
      });

      if (response.ok) {
        mutate();
      } else {
        alert("Error updating flashcard");
      }
    } catch (error) {
      alert("Error updating flashcard");
    }
  }

  async function handleDeleteFlashcard(flashcardId) {
    try {
      const response = await fetch(`/api/flashcards/${flashcardId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        mutate();
        setSuccessMessage("Flashcard successfully deleted!");
      } else {
        alert("Error deleting flashcard");
      }
    } catch (error) {
      alert("Error deleting flashcard");
    }
  }

  async function handleAddFlashcard(flashcardData) {
    try {
      const response = await fetch("/api/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flashcardData),
      });

      if (response.ok) {
        mutate();
        setSuccessMessage("Flashcard successfully created!");
      } else {
        alert("Error creating flashcard");
      }
    } catch (error) {
      alert("Error creating flashcard");
    }
  }

  return (
    <>
      <SuccessMessage
        message={successMessage}
        show={!!successMessage}
        onClose={() => setSuccessMessage("")}
      />
      <AllFlashcardsPage
        flashcards={flashcards}
        isLoading={isLoading}
        error={error}
        onDeleteFlashcard={handleDeleteFlashcard}
        onMarkCorrect={handleMarkCorrect}
        onUpdate={mutate}
        onAddFlashcard={handleAddFlashcard}
      />
    </>
  );
}
