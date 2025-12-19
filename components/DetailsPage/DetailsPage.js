import { useState } from "react";
import AddElement from "../AddElement.js/AddElement";
import BackButton from "./BackButton/BackButton";
import FlashcardForm from "./FlashcardForm";
import { DetailsPageWrapper, FlashcardWrapper } from "./StyledDetailsPage";

export default function CollectionDetails({ collection, onDelete }){
    const [isEditing, setIsEditing] = useState(false);

    if (!collection) {
        return <p>No collection data available</p>;
    }
function handleEditing() {                   
    setIsEditing(true);
  }

  function handleSubmit(newCollectionData) {                               
    onAddCollection(newCollectionData);                                 
    setIsEditing(false);                                               
  }

  function handleCancel() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
     <div>
        <FlashcardForm
          onSubmit={handleSubmit}
          buttonText="Create Collection"
        />
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }


    return(
        <DetailsPageWrapper>
        <BackButton/>
       <AddElement/>
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