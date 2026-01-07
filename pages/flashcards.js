import useSWR from "swr";
import FlippableFlashcard from "@/components/DetailsPage/FlipFunction/FlippableFlashcard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FlashcardsPage() {
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
        mutate(); // Refresh the flashcards list
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
        mutate(); // Refresh the flashcards list
      } else {
        alert("Error deleting flashcard");
      }
    } catch (error) {
      alert("Error deleting flashcard");
    }
  }

  if (isLoading) {
    return <h1>Loading flashcards...</h1>;
  }

  if (error) {
    return <h1>Error loading flashcards</h1>;
  }

  if (!flashcards || flashcards.length === 0) {
    return (
      <div>
        <h1>All Flashcards</h1>
        <p>No Flashcard found.</p>
      </div>
    );
  }

  // Filter nur die Flashcards, die NICHT als korrekt markiert sind
  const activeFlashcards = flashcards.filter(
    (flashcard) => !flashcard.isCorrect
  );

  if (activeFlashcards.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>All Flashcards</h1>
        <p>All Flashcard are achivaded! Look at archive.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Alle Flashcards ({activeFlashcards.length})</h1>
      <div>
        {activeFlashcards.map((flashcard) => (
          <FlippableFlashcard
            key={flashcard._id}
            flashcard={flashcard}
            onDelete={handleDeleteFlashcard}
            onMarkCorrect={handleMarkCorrect}
            onUpdate={mutate}
          />
        ))}
      </div>
    </div>
  );
}
