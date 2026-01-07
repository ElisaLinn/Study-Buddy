import useSWR from "swr";
import FlippableFlashcard from "@/components/DetailsPage/FlipFunction/FlippableFlashcard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArchivePage() {
  const {
    data: allFlashcards,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/flashcards", fetcher);

  // Filter nur die korrekten (archivierten) Flashcards
  const archivedFlashcards =
    allFlashcards?.filter((flashcard) => flashcard.isCorrect) || [];

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
    return <h1>Loading archive...</h1>;
  }

  if (error) {
    return <h1>Error loading archive</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Archiv correct Flashcards ({archivedFlashcards.length})</h1>
      {archivedFlashcards.length === 0 ? (
        <p>
         No Flascards here yet. Mark Flashcards as
          correct to see them here.
        </p>
      ) : (
        <div>
          {archivedFlashcards.map((flashcard) => (
            <FlippableFlashcard
              key={flashcard._id}
              flashcard={flashcard}
              onDelete={handleDeleteFlashcard}
              onMarkCorrect={handleMarkCorrect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
