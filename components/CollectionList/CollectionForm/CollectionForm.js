import SuccessMessage from "@/components/Messages/SuccessMessage";
import ErrorMessage from "@/components/Messages/ErrorMessage";
import { useState } from "react";
import { 
  ModalContent,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  SaveButton,
  ModalFooter,
  ButtonGroup,
  CancelButton
} from "@/components/Edit/EditCollectionModal/StyledEditCollectionModal";


export default function CollectionForm({ onSubmit, onCancel, buttonText = "Submit" }) {
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitError("");
    setSuccessMessage("");

    const formData = new FormData(event.target);
    const collectionData = Object.fromEntries(formData);

    if (!collectionData.CollectionTitle || collectionData.CollectionTitle === "") {
      setSubmitError("Please type in a Collection Title");
      return;
    }

    const cleanedData = {
      title: collectionData.CollectionTitle,
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
  return (
    <>
      {submitError && <ErrorMessage message={submitError} show={!!submitError}>{submitError}</ErrorMessage>}
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          show={!!successMessage}
          onClose={() => setSuccessMessage("")}
        >
          {successMessage}
        </SuccessMessage>
      )}
      
      <ModalContent>
        <ModalHeader>
          <h2>Create New Collection</h2>
        </ModalHeader>
        
        <Form onSubmit={handleSubmit} noValidate>
          <ModalBody>
            <label htmlFor="CollectionTitle">Collection Title</label>
            <Input
              type="text"
              id="CollectionTitle"
              name="CollectionTitle"
              placeholder="Add your collection"
            />
          </ModalBody>
          
          <ModalFooter>
            <ButtonGroup>
              <CancelButton type="button" onClick={onCancel}>Cancel</CancelButton>
              <SaveButton type="submit">Create Collection</SaveButton>
            </ButtonGroup>
          </ModalFooter>
        </Form>
      </ModalContent>
    </>
  );
}
