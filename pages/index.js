import CollectionList from "@/components/CollectionList/CollectionList";
import { Text } from "@/components/StylingGeneral/StylingGeneral";
import { useState } from "react";
import useSWR from "swr";
import SuccessMessage from "@/components/Messages/SuccessMessage";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    data: collections,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/collections", fetcher);

  if (!collections || collections.length === 0) {
    return (
      <div>
        <h1>All Flashcards</h1>
        <p>No Flashcard found.</p>
      </div>
    );
  }

  async function handleAddCollection(newCollectionData) {
    try {
      const response = await fetch("/api/collections", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCollectionData),
      });

      if (response.ok) {
        mutate();
        setSuccessMessage("Collection successfully created!");
      } else {
        alert("Error creating collection");
      }
    } catch (error) {
      alert("Error creating collection");
    }
  }

  async function handleUpdateCollection(updatedCollection) {
    try {
      const response = await fetch(
        `/api/collections/${updatedCollection._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: updatedCollection.title }),
        }
      );

      if (response.ok) {
        mutate();
        setSuccessMessage("Collection successfully updated!");
      } else {
        alert("Error updating collection");
      }
    } catch (error) {
      alert("Error updating collection");
    }
  }

  async function handleDeleteCollection(collectionId) {
    try {
      const response = await fetch(`/api/collections/${collectionId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        mutate();
        setSuccessMessage("Collection successfully deleted!");
      } else {
        alert("Error deleting collection");
      }
    } catch (error) {
      alert("Error deleting collection");
    }
  }

  if (isLoading) return <p>Loading activities…</p>;
  if (error) return <p>Error loading activities.</p>;
  if (!collections) return <p>No activities found.</p>;

  return (
    <>
      <SuccessMessage
        message={successMessage}
        show={!!successMessage}
        onClose={() => setSuccessMessage("")}
      />
      <CollectionList
        collections={collections}
        onAddCollection={handleAddCollection}
        onUpdateCollection={handleUpdateCollection}
        onDeleteCollection={handleDeleteCollection}
      />
    </>
  );
}
