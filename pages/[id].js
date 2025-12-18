import useSWR from "swr";
import { useRouter } from "next/router";
import CollectionDetails from "@/components/DetailsPage/DetailsPage";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CollectionDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: collection, isLoading, error } = useSWR(
    id ? `/api/collections/${id}` : null,
    fetcher
  );

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
    const response = await fetch(`/api/collections/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    } else {
      return alert("Please try again");
    }
  }

  return (
    <>
      <CollectionDetails collection={collection} onDelete={handleDelete} />
    </>
  );
}
