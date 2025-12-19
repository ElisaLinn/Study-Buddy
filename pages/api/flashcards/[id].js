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
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }
}