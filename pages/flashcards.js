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
        <h1>Alle Flashcards</h1>
        <p>Keine Flashcards gefunden.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Flashcards ({flashcards.length})</h1>
      <div>
        {flashcards.map((flashcard) => (
          <FlippableFlashcard
            key={flashcard._id}
            flashcard={flashcard}
            onDelete={handleDeleteFlashcard}
          />
        ))}
      </div>
    </div>
  );
}
