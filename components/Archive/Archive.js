import { BackLink } from "@/components/StylingGeneral/StylingGeneral";
import FlippableFlashcard from "../DetailsPage/FlipFunction/FlippableFlashcard";
import { LucideArrowBigLeft } from "lucide-react";

import { Text } from "../StylingGeneral/StylingGeneral";

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
          <BackLink href="/archive"><LucideArrowBigLeft/></BackLink>
          <Text>
            {archivedFlashcards.length} correct Flashcards from {currentCollection.title}
          
          </Text>
        </>
      ) : (
        <Text>You marked {archivedFlashcards.length} Flashcards as correct</Text>
      )}
      {archivedFlashcards.length === 0 ? (
        <Text>
          {currentCollection
            ? "No correct flashcards from ${currentCollection.title} yet."
            : "No flashcards here yet. Mark Flashcards as correct to see them here."}
        </Text>
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
