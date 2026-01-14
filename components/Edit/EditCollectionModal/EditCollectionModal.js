import { useState } from "react";
import { 
  ModalWrapper,
  ModalBackdrop, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  CloseButton,
  Form,
  Input,
 
  ButtonGroup,
  DeleteSection,
  CancelButton,
  SaveButton
} from "./StyledEditCollectionModal";
import DeleteButton from "../../DeleteButton/DeleteButton";
import { X } from "lucide-react";

export default function EditCollectionModal({ 
  collection, 
  isOpen, 
  onClose, 
  onSave, 
  onDelete 
}) {
  const [title, setTitle] = useState(collection?.title || "");

  if (!isOpen || !collection) return null;

  function handleSubmit(event) {
    event.preventDefault();
    if (title) {
      onSave({ ...collection, title: title});
      onClose();
    }
  }

  function handleDelete(id) {
    if (onDelete) {
      onDelete(id);
    }
    onClose();
  }

  function handleCancel() {
    setTitle(collection.title);
    onClose();
  }

  return (
    <ModalWrapper>
      <ModalBackdrop/>
      <ModalContent>
        <ModalHeader>
          <h2>Edit Collection</h2>
          <CloseButton onClick={onClose}>
            <X/>
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <label>Collection Name:</label>
            <Input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter collection name"
              autoFocus
            />
          </Form>
          <DeleteSection>
            <h3>Danger Zone</h3>
            <p>Deleting this collection will also delete all flashcards in it.</p>
            <DeleteButton 
              onDelete={handleDelete} 
              id={collection._id}
            />
          </DeleteSection>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <CancelButton onClick={handleCancel}>
              Cancel
            </CancelButton>
            <SaveButton  onClick={handleSubmit}>
              Save Changes
            </SaveButton>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
}