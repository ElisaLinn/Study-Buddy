import { useState } from "react";
import AddElement from "../AddElement.js/AddElement";
import CollectionCard from "./CollectionCard";
import {
  CollectionPageWrapper,
  CollectionsList,
  HeaderSection,
  AddElementWrapper,
} from "./StyledCollection";
import CollectionForm from "./CollectionForm/CollectionForm";
import { Text } from "../StylingGeneral/StylingGeneral";

export default function CollectionList({ collections, onAddCollection }) {
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
      <CollectionPageWrapper>
        <CollectionForm
          onSubmit={handleSubmit}
          buttonText="Create Collection"
        />
        <button onClick={handleCancel}>Cancel</button>
      </CollectionPageWrapper>
    );
  }
  return (
    <CollectionPageWrapper>
      <HeaderSection>
        <Text>
          You have {collections.length} collection
          {collections.length !== 1 ? "s" : ""}
        </Text>
      </HeaderSection>
      <AddElement onClick={handleEditing} />
      <CollectionsList>
        {collections.map((collection) => (
          <li key={collection._id}>
            <CollectionCard
              _id={collection._id}
              title={collection.title}
              flashcardCount={collection.flashcardCount}
              correctCount={collection.correctCount}
            />
          </li>
        ))}
      </CollectionsList>
    </CollectionPageWrapper>
  );
}
