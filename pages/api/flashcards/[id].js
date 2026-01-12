import dbConnect from "@/db/connect";
import Flashcard from "@/db/models/Flashcard";

export default async function handler(request, response) {
  await dbConnect();
  
  const { id } = request.query;

  if (request.method === "DELETE") {
    try {
      const deletedFlashcard = await Flashcard.findByIdAndDelete(id);
      
      if (!deletedFlashcard) {
        return response.status(404).json({ message: "Flashcard not found" });
      }
      
      response.status(200).json({ message: "Flashcard deleted successfully" });
    } catch (error) {
      response.status(400).json({ message: "Error deleting flashcard" });
    }
  } else if (request.method === "PATCH") {
    try {
      const { isCorrect, question, answer, collectionId } = request.body;
      
    
      const updateFields = {};
      if (isCorrect !== undefined) {
        updateFields.isCorrect = isCorrect;
      }
      if (question !== undefined) {
        updateFields.question = question;
      }
      if (answer !== undefined) {
        updateFields.answer = answer;
      }
      if (collectionId !== undefined) {
        updateFields.collectionId = collectionId;
      }
      
      const updatedFlashcard = await Flashcard.findByIdAndUpdate(
        id, 
        updateFields,
        { new: true }
      );
      
      if (!updatedFlashcard) {
        return response.status(404).json({ message: "Flashcard not found" });
      }
      
      response.status(200).json(updatedFlashcard);
    } catch (error) {
      response.status(400).json({ message: "Error updating flashcard" });
    }
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }
}