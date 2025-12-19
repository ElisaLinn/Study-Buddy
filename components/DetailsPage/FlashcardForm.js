export default function FlashcardForm ({ onSubmit, buttonText = "Submit" }){
      const [submitError, setSubmitError] = useState("");
      const [successMessage, setSuccessMessage] = useState("");

    async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError("");
    setSuccessMessage("");

    const formData = new FormData(event.target);
    const flashcardData = Object.fromEntries(formData);

    const cleanedData = {
      title: flashcardData.FlashcardTitle
    };

    try {
      if (onSubmit) {
      
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
        <label htmlFor="question">Collection Title</label>
        <input 
          type="text" 
          id="question" 
          name="question" 
          placeholder="Type in your question" 
          required
        />
         <label htmlFor="answer">Collection Title</label>
        <input 
          type="text" 
          id="answer" 
          name="answer" 
          placeholder="Type in your answer" 
          required
        />
        <button type="submit">{buttonText}</button>
      </form>
        </>
    )
}