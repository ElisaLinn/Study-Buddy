import dbConnect from "@/db/connect";
import Collection from "@/db/models/Collection";
import Flashcard from "@/db/models/Flashcard";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const collection = await Collection.findById(id);

      if (!collection) {
        response.status(404).json({ status: "Not Found" });
        return;
      }

      const flashcards = await Flashcard.find({ collectionId: id });

      const collectionWithFlashcards = {
        ...collection.toObject(),
        flashcards: flashcards,
      };

      response.status(200).json(collectionWithFlashcards);
      return;
    } catch (error) {
      console.error("Database error:", error);
      response
        .status(500)
        .json({ status: "Database error", error: error.message });
      return;
    }
  }
  if (request.method === "POST") {
    try {
      const flashcardData = request.body;

      if (!flashcardData.question) {
        response.status(400).json({ status: "Title is required" });
        return;
      }

      if (!flashcardData.answer) {
        response.status(400).json({ status: "Title is required" });
        return;
      }

      const newFlashcard = await Flashcard.create(flashcardData);
      response.status(201).json(newFlashcard);
      return;
    } catch (error) {
      response
        .status(400)
        .json({ status: "Error creating flashcard", error: error.message });
      return;
    }
  }

  if (request.method === "PUT") {
    const { id } = request.query;

    await Flashcard.findByIdAndUpdate(id, title);
    response.status(200).json({ status: "OK!" });
    return;
  }

  if (request.method === "PATCH") {
    try {
      const { title } = request.body;
      
      if (!title || !title ) {
        return response.status(400).json({ message: "Title is required" });
      }

      const updatedCollection = await Collection.findByIdAndUpdate(
        id, 
        { title: title }, 
        { new: true }
      );
      
      if (!updatedCollection) {
        return response.status(404).json({ message: "Collection not found" });
      }
      
      response.status(200).json(updatedCollection);
    } catch (error) {
      console.error("Error updating collection:", error);
      response.status(400).json({ message: "Error updating collection" });
    }
    return;
  }

  if (request.method === "DELETE") {
    try {
    
      await Flashcard.deleteMany({ collectionId: id });
      
    
      const deletedCollection = await Collection.findByIdAndDelete(id);
      
      if (!deletedCollection) {
        return response.status(404).json({ message: "Collection not found" });
      }
      
      response.status(200).json({ message: "Collection and its flashcards deleted successfully" });
    } catch (error) {
      console.error("Error deleting collection:", error);
      response.status(400).json({ message: "Error deleting collection" });
    }
    return;
  }

  response.status(405).json({ message: "Method not allowed" });
}
