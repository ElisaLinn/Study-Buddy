import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import CollectionDetails from "@/components/DetailsPage/DetailsPage";
import SuccessMessage from "@/components/Messages/SuccessMessage";
import LoadingMessage from "@/components/Messages/LoadingMessage";

export default function CollectionDetailsPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const {
    data: collection,
    isLoading,
    error,
    mutate,
  } = useSWR(id ? `/api/collections/${id}` : null);

  if (!router.isReady) {
    return <LoadingMessage message="Loading collection..." show={true} />;
  }

  if (isLoading) {
    return <LoadingMessage message="Loading collection details..." show={true} />;
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
    const response = await fetch(`/api/collections/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
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
        setSuccessMessage("Flashcard successfully created!");
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
        mutate();
        setSuccessMessage("Flashcard successfully deleted!");
      } else {
        alert("Error deleting flashcard");
      }
    } catch (error) {
      alert("Error deleting flashcard");
    }
  }

  async function handleMarkCorrect(flashcardId, isCorrect) {
    try {
      const response = await fetch(`/api/flashcards/${flashcardId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCorrect }),
      });

      if (response.ok) {
        mutate();
      } else {
        alert("Error updating flashcard");
      }
    } catch (error) {
      alert("Error updating flashcard");
    }
  }

  return (
    <>
      <SuccessMessage
        message={successMessage}
        show={!!successMessage}
        onClose={() => setSuccessMessage("")}
      />
      <CollectionDetails
        collection={collection}
        onDelete={handleDelete}
        onAddFlashcard={handleAddFlashcard}
        onDeleteFlashcard={handleDeleteFlashcard}
        onMarkCorrect={handleMarkCorrect}
        onUpdate={mutate}
      />
    </>
  );
}
