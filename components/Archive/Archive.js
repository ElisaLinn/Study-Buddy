import Link from "next/link";
import FlippableFlashcard from "../DetailsPage/FlipFunction/FlippableFlashcard";

export default function ArchivePage({
  archivedFlashcards,
  currentCollection,
  onDelete,
  onMarkCorrect,
  onUpdate,
}) {
  return (
    <div>
      {currentCollection ? (
        <>
          <Link href="/archive">← Back to all archived flashcards</Link>
          <h1>
            {archivedFlashcards.length} correct Flashcards from 
            {currentCollection.title}
          </h1>
        </>
      ) : (
        <h1>Archiv correct Flashcards ({archivedFlashcards.length})</h1>
      )}
      {archivedFlashcards.length === 0 ? (
        <p>
          {currentCollection
            ? "No correct flashcards from ${currentCollection.title} yet."
            : "No flashcards here yet. Mark Flashcards as correct to see them here."}
        </p>
      ) : (
        <div>
          {archivedFlashcards.map((flashcard) => (
            <FlippableFlashcard
              key={flashcard._id}
              flashcard={flashcard}
              onDelete={onDelete}
              onMarkCorrect={onMarkCorrect}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
