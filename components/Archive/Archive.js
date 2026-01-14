import { BackLink } from "@/components/StylingGeneral/StylingGeneral";
import FlippableFlashcard from "../DetailsPage/FlipFunction/FlippableFlashcard";
import { BrushCleaning, LucideArrowBigLeft } from "lucide-react";
import { ResetAllButton, CardWrapper, AnimationWrapper, ResetAllButtonWrapper } from "./StyledArchive";
import { Text } from "../StylingGeneral/StylingGeneral";
import { useState } from "react";

export default function ArchivePage({
  archivedFlashcards,
  currentCollection,
  onDelete,
  onMarkCorrect,
  onUpdate,
  onResetAll,
}) {
  const [isResetting, setIsResetting] = useState(false);

  const handleResetAll = () => {
    setIsResetting(true);
    setTimeout(() => {
      onResetAll();
      setIsResetting(false);
    }, 700);
  };
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
            <ResetAllButtonWrapper>
              <ResetAllButton onClick={handleResetAll} disabled={isResetting}>
                <BrushCleaning/>
                {isResetting ? 'Removing...' : 'Remove All Back to Flashcards'}
              </ResetAllButton>
            </ResetAllButtonWrapper>
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
        <AnimationWrapper>
          {archivedFlashcards.map((flashcard) => (
            <CardWrapper 
              key={flashcard._id}
              isResetting={isResetting}
            >
              <FlippableFlashcard
                flashcard={flashcard}
                onDelete={onDelete}
                onMarkCorrect={onMarkCorrect}
                onUpdate={onUpdate}
                showRemoveButton={true}
              />
            </CardWrapper>
          ))}
        </AnimationWrapper>
      )}
    </div>
  );
}
