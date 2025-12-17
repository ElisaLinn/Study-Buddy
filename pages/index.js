import CollectionList from "@/CollectionList/CollectionList";
import useSWR from "swr";

const { data: collections, isLoading, error } = useSWR("/api/collections");
  const [search, setSearch] = useState("");


export default function HomePage() {

if (isLoading) return <p>Loading activities…</p>;
  if (error) return <p>Error loading activities.</p>;
  if (!collections) return <p>No activities found.</p>;


  return (
    <div>
      <CollectionList collections={(collections)}/>
    </div>
  );
}
