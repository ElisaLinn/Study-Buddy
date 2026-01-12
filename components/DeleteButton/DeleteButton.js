import { useState } from "react";
import { DeleteButtonStyled } from "./StyledDeleteButton";
import { Trash2 } from "lucide-react";

export default function DeleteButton({ onDelete, id }) {
   const [deleteButton, setDeleteButton] = useState(false);

  function handleFirstClick() {         
    setDeleteButton(true);
  }

  function handleCancel() {
    setDeleteButton(false); 
  }

  function handleConfirmDelete() {
    onDelete(id);   
  }

  if (!deleteButton) {
    return (
      <>
        <DeleteButtonStyled  type="button" onClick={handleFirstClick}>
          <Trash2/>
        </DeleteButtonStyled>
      </>
    );
  }

 
  return (
    <>
      <section>
        <p>Really Delete?</p>
        <div>
          <DeleteButtonStyled type="button" onClick={handleCancel}>
            Cancel
          </DeleteButtonStyled>
          <DeleteButtonStyled type="button" onClick={handleConfirmDelete}>
            Delete
          </DeleteButtonStyled>
        </div>
      </section>
    </>
  );
}
 