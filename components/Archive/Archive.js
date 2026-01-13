import { BackLink } from "@/components/StylingGeneral/StylingGeneral";
import FlippableFlashcard from "../DetailsPage/FlipFunction/FlippableFlashcard";
import { BrushCleaning, LucideArrowBigLeft } from "lucide-react";
import { ResetAllButton } from "./StyledArchive";
import { Text } from "../StylingGeneral/StylingGeneral";

export default function ArchivePage({
  archivedFlashcards,
  currentCollection,
  onDelete,
  onMarkCorrect,
  onUpdate,
  onResetAll,
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
        <>
          <Text>You marked {archivedFlashcards.length} Flashcards as correct</Text>
          {archivedFlashcards.length > 0 && (
            <ResetAllButton onClick={onResetAll}><BrushCleaning/>
              Remove All Back to Flashcards
            </ResetAllButton>
          )}
        </>
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
              showRemoveButton={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
