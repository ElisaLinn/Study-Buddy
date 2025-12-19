import CollectionCard from "../CollectionCard";

export default function CollectionForm (){
    const { mutate } = useSWR("/api/collections");
      const { data: categories } = useSWR("/api/flashcards");
      const [submitError, setSubmitError] = useState("");
      const [successMessage, setSuccessMessage] = useState("");
         const [isEditing, setIsEditing] = useState(false);

    async function handleSubmit(event) {
    event.preventDefault();

     setSubmitError("");
    setSuccessMessage("");

    const formData = new FormData(event.target);
    const collectionData = Object.fromEntries(formData);

    const response = await fetch("/api/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collectionData),
    });

    if (!response.ok) {
      setSubmitError("Failed to create a new collection.");
      return;
    }
    //activity to go on top and successmessage
    setSuccessMessage("A new collection has been created!");
    mutate();
    event.target.reset();
    setSelectedFile(null);
    setFormKey((prev) => prev + 1);
  }
    return(
        <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Collection Title">Collection Title</label>
        <input type="text" id="CollectionTitle" name="CollectionTitle" placeholder="Add your collection" required/>
  <button type="submit" >submit</button>
      </form>
        </>
    )
}