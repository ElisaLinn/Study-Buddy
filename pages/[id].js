import useSWR from "swr";
import { useRouter } from "next/router";
import CollectionDetails from "@/components/DetailsPage/DetailsPage";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CollectionDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: collection,
    isLoading,
    error,
    mutate,
  } = useSWR(id ? `/api/collections/${id}` : null, fetcher);

  if (!router.isReady) {
    return <h1>Loading...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.error("Error loading collection:", error);
    return <h1>Error loading collection</h1>;
  }

  if (!collection) {
    return (
      <div>
        <h1>Not Found</h1>
        <p>Activity not found.</p>
      </div>
    );
  }

  async function handleDelete() {
    const response = await fetch(`/api/flashcards/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return;
    } else {
      return alert("Please try again");
    }
  }

  async function handleAddFlashcard(flashcardData) {
    try {
      const response = await fetch("/api/flashcards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...flashcardData,
          collectionId: id,
        }),
      });

      if (response.ok) {
        mutate();
        return;
      } else {
        throw new Error("Failed to create flashcard");
      }
    } catch (error) {
      throw error;
    }
  }

  async function handleDeleteFlashcard(flashcardId) {
    try {
      const response = await fetch(`/api/flashcards/${flashcardId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        mutate(); // Refresh the collection data
      } else {
        alert("Error deleting flashcard");
      }
    } catch (error) {
      alert("Error deleting flashcard");
    }
  }

  return (
    <>
      <CollectionDetails
        collection={collection}
        onDelete={handleDelete}
        onAddFlashcard={handleAddFlashcard}
        onDeleteFlashcard={handleDeleteFlashcard}
      />
    </>
  );
}
