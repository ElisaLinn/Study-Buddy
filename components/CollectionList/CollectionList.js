import { useState } from "react";
import AddElement from "../AddElement.js/AddElement";
import CollectionCard from "./CollectionCard";
import { CollectionPageWrapper } from "./StyledCollection";
import CollectionForm from "./CollectionForm/CollectionForm";


export default function CollectionList({collections}){
     const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {                   // ändert state von false zu true => Ansicht wird zu Editing gewechselt
    setIsEditing(true);
  }

  function handleEditSubmit(editedData) {                               //Veränderung wird gespeichert editedData sind die data aus ColorForm
    onEditCollection(collection._id, editedData);                                 // ruft on EditColor aus App auf, übergibt color.id und die neuen Daten
    setIsEditing(false);                                               
  }

  function handleCancel() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
     <div>
      
        <CollectionForm
          onSubmitColor={handleEditSubmit}
          initialData={collectionData}
          buttonText="Save Changes"
        />
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }
    return(
        <CollectionPageWrapper>
        <AddElement/>
            {collections.map((collection) => (
                <li key={collection._id}>
                    <CollectionCard 
                        _id={collection._id}
                        title={collection.title}
                    />    
                </li>
            ))}
            <AddElement onEditCollection={handleEditing}/>
        </CollectionPageWrapper>
    )
}