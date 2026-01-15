import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import Archive from "@/components/Archive/Archive";
import SuccessMessage from "@/components/Messages/SuccessMessage";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArchivePage() {
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const { collection } = router.query;

  const {
    data: allFlashcards,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/flashcards", fetcher);

  const { data: collections } = useSWR("/api/collections", fetcher);

  let archivedFlashcards =
    allFlashcards?.filter((flashcard) => flashcard.isCorrect) || [];

  if (collection && archivedFlashcards.length > 0) {
    archivedFlashcards = archivedFlashcards.filter(
      (flashcard) => flashcard.collectionId === collection
    );
  }

  const currentCollection = collections?.find((col) => col._id === collection);

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

  async function handleResetAllFlashcards() {
    try {
      for (const flashcard of archivedFlashcards) {
        const response = await fetch(`/api/flashcards/${flashcard._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isCorrect: false }),
        });

        if (!response.ok) {
          alert("Error resetting flashcard");
          return;
        }
      }
      mutate();
      setSuccessMessage("All flashcards moved back successfully!");
    } catch (error) {
      alert("Error resetting flashcards");
    }
  }

  async function handleDeleteFlashcard(flashcardId) {
    try {
      const response = await fetch(`/api/flashcards/${flashcardId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        mutate();
      } else {
        alert("Error deleting flashcard");
      }
    } catch (error) {
      alert("Error deleting flashcard");
    }
  }

  if (isLoading) {
    return <h1>Loading archive...</h1>;
  }

  if (error) {
    return <h1>Error loading archive</h1>;
  }

  return (
    <>
      <SuccessMessage
        message={successMessage}
        show={!!successMessage}
        onClose={() => setSuccessMessage("")}
      />
      <Archive
        archivedFlashcards={archivedFlashcards}
        currentCollection={currentCollection}
        onDelete={handleDeleteFlashcard}
        onMarkCorrect={handleMarkCorrect}
        onUpdate={mutate}
        onResetAll={handleResetAllFlashcards}
      />
    </>
  );
}
