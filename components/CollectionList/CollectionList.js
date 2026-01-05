import { useState } from "react";
import AddElement from "../AddElement.js/AddElement";
import CollectionCard from "./CollectionCard";
import { CollectionPageWrapper } from "./StyledCollection";
import CollectionForm from "./CollectionForm/CollectionForm";


export default function CollectionList({collections, onAddCollection}){
     const [isEditing, setIsEditing] = useState(false);

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
        <CollectionForm
          onSubmit={handleSubmit}
          buttonText="Create Collection"
        />
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }
    return(
        <CollectionPageWrapper>
        <AddElement onClick={handleEditing}/>
            {collections.map((collection) => (
                <li key={collection._id}>
                    <CollectionCard 
                        _id={collection._id}
                        title={collection.title}
                        flashcardCount={collection.flashcardCount}
                    />    
                </li>
            ))}
            <AddElement onClick={handleEditing}/>
        </CollectionPageWrapper>
    )
}