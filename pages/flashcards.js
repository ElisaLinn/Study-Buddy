import useSWR from "swr";
import { useState } from "react";
import AllFlashcardsPage from "@/components/FlashcardsPage/FlashcardsPage";
import SuccessMessage from "@/components/SuccessMessage/SuccessMessage";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FlashcardsPage() {
  const [successMessage, setSuccessMessage] = useState("");
  
  const {
    data: flashcards,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/flashcards", fetcher);

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
      />
    </>
  );
}
