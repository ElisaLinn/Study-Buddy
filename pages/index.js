import CollectionList from "@/components/CollectionList/CollectionList";
import { Text } from "@/components/StylingGeneral/StylingGeneral";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
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
      <CollectionList
        collections={collections}
        onAddCollection={handleAddCollection}
        onUpdateCollection={handleUpdateCollection}
        onDeleteCollection={handleDeleteCollection}
      />
    </>
  );
}
