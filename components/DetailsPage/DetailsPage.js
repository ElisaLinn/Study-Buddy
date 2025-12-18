import BackButton from "./BackButton/BackButton";
import { DetailsPageWrapper, FlashcardWrapper } from "./StyledDetailsPage";

export default function CollectionDetails({ collection, onDelete }){
    if (!collection) {
        return <p>No collection data available</p>;
    }



    return(
        <DetailsPageWrapper>
        <BackButton/>
       
            <h1>{collection.title}</h1>
            {collection.imageUrl && (
                <img
                    src={collection.imageUrl?.url || collection.imageUrl}
                    alt={collection.title}
                    height={300}
                />
            )}
  
            {collection.flashcards && collection.flashcards.length > 0 && (
                <div>
                    <h2>Flashcards:</h2>
               
                    {collection.flashcards.map((flashcard) => (
                      
                        <FlashcardWrapper key={flashcard._id} >
                            <h3>Question:</h3>
                            <p>{flashcard.question}</p>
                            <h3>Answer:</h3>
                            <p>{flashcard.answer}</p>
                               
                        </FlashcardWrapper>
                    ))}
                </div>
            )}
          
            <button onClick={onDelete}>Delete Collection</button>
        </DetailsPageWrapper>
    )
}