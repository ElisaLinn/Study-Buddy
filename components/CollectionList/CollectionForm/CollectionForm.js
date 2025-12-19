import useSWR from "swr";
import CollectionCard from "../CollectionCard";
import { useState } from "react";

export default function CollectionForm ({ onSubmit, buttonText = "Submit" }){
      const [submitError, setSubmitError] = useState("");
      const [successMessage, setSuccessMessage] = useState("");

    async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError("");
    setSuccessMessage("");

    const formData = new FormData(event.target);
    const collectionData = Object.fromEntries(formData);

    // Rename the field to match the schema
    const cleanedData = {
      title: collectionData.CollectionTitle
    };

    try {
      if (onSubmit) {
        // Use the prop function if provided
        await onSubmit(cleanedData);
        setSuccessMessage("A new collection has been created!");
        event.target.reset();
      }
    } catch (error) {
      console.error("Error creating collection:", error);
      setSubmitError("Failed to create a new collection.");
    }
  }
    return(
        <>
      {submitError && <p style={{color: 'red'}}>{submitError}</p>}
      {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="CollectionTitle">Collection Title</label>
        <input 
          type="text" 
          id="CollectionTitle" 
          name="CollectionTitle" 
          placeholder="Add your collection" 
          required
        />
        <button type="submit">{buttonText}</button>
      </form>
        </>
    )
}