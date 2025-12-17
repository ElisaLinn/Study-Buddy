
import CollectionList from "@/components/CollectionList/CollectionList";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {

const { data: collections, isLoading, error } = useSWR("/api/collections", fetcher);

if (isLoading) return <p>Loading activities…</p>;
  if (error) return <p>Error loading activities.</p>;
  if (!collections) return <p>No activities found.</p>;


  return (
    <div>
      <CollectionList collections={(collections)}/>
    </div>
  );
}
