import FlippableFlashcard from "../DetailsPage/FlipFunction/FlippableFlashcard";

export default function ArchivePage() {
  return (
    <>
      <FlippableFlashcard flashcard={flashcard} onDelete={onDeleteFlashcard} />
    </>
  );
}
