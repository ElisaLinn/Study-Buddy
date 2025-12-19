import CollectionList from "@/components/CollectionList/CollectionList";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const {
    data: collections,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/collections", fetcher);

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

  if (isLoading) return <p>Loading activities…</p>;
  if (error) return <p>Error loading activities.</p>;
  if (!collections) return <p>No activities found.</p>;

  return (
    <div>
      <CollectionList
        collections={collections}
        onAddCollection={handleAddCollection}
      />
    </div>
  );
}
