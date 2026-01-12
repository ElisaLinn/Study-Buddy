import Link from "next/link";
import { 
  CollectionWrapper, 
  CollectionTitle, 
  CollectionStats, 
  StatItem, 
  StatIcon, 
  ProgressBar, 
  ProgressFill, 
  LinkStyled
} from "./StyledCollection";
import FlashcardCounter from "./FlashcardCounter/FlashcardCounter";
import CorrectFlashcardCounter from "./CorrectFlashcardCounter/CorrectFlashcardCounter";
import { Book, Check } from "lucide-react";

export default function CollectionCard({_id, title, flashcardCount, correctCount}){
    const progressPercentage = flashcardCount > 0 ? (correctCount / flashcardCount) * 100 : 0;
    
    return(
        <LinkStyled href={`/${_id}`}>
            <CollectionWrapper>
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
            </CollectionWrapper>
        </LinkStyled>
    )
}