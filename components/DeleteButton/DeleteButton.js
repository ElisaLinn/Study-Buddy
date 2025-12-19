import { useState } from "react";

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
        <button  type="button" onClick={handleFirstClick}>
          Delete activity
        </button>
      </>
    );
  }

 
  return (
    <>
   
    <section>
        <p>Really Delete?</p>
    <div>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" onClick={handleConfirmDelete}>
        Delete
      </button>
      </div>
      </section>
    
    </>
  );
}
 