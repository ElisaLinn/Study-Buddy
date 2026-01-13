
import { useState } from "react";
import { 
  CollectionWrapper, 
  CollectionTitle, 
  CollectionStats, 
  StatItem, 
  ProgressBar, 
  ProgressFill,
  LinkStyled,
  CollectionEditButton,
  Section,
} from "./StyledCollection";
import FlashcardCounter from "./FlashcardCounter/FlashcardCounter";
import CorrectFlashcardCounter from "./CorrectFlashcardCounter/CorrectFlashcardCounter";
import EditCollectionModal from "../Edit/EditCollectionModal/EditCollectionModal";
import { Book, Check, Edit2, Ellipsis } from "lucide-react";
import { EditButton } from "../DetailsPage/FlipFunction/StyledFlippableFlashcard";

export default function CollectionCard({
  _id, 
  title, 
  flashcardCount, 
  correctCount, 
  onUpdateCollection, 
  onDeleteCollection
}){
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const progressPercentage = flashcardCount > 0 ? (correctCount / flashcardCount) * 100 : 0;
    
    const collection = { _id, title, flashcardCount, correctCount };

    function handleEditClick(event) {
      event.preventDefault();
      event.stopPropagation();
      setIsEditModalOpen(true);
    }

    function handleSave(updatedCollection) {
      if (onUpdateCollection) {
        onUpdateCollection(updatedCollection);
      }
    }

    function handleDelete(collectionId) {
      if (onDeleteCollection) {
        onDeleteCollection(collectionId);
        setIsEditModalOpen();
      }
    }
    
    return(
      <>
      <CollectionWrapper>
        <Section>
          <CollectionEditButton 
            onClick={handleEditClick}
          >
            <Ellipsis/>
          </CollectionEditButton>

          <LinkStyled href={`/${_id}`}>
            <section>
                <CollectionTitle>{title}</CollectionTitle>
                <CollectionStats>
                    <StatItem>
                        <Book/>
                        <FlashcardCounter count={flashcardCount} />
                    </StatItem>
                    <StatItem>
                        <Check/>
                        <CorrectFlashcardCounter 
                            correctCount={correctCount} 
                            totalCount={flashcardCount}
                            collectionId={_id}
                        />
                    </StatItem>
                </CollectionStats>
                {flashcardCount > 0 && (
                    <ProgressBar>
                        <ProgressFill $percentage={progressPercentage} />
                    </ProgressBar>
                )}
            </section>
          </LinkStyled>
        </Section>
</CollectionWrapper>
        <EditCollectionModal
          collection={collection}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSave}
          onDelete={handleDelete}
        />
        
      </>
    )
}
