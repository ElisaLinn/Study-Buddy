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

      // Load flashcards that belong to this collection
      const flashcards = await Flashcard.find({ collectionId: id });

      // Add flashcards to the collection object
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
  response.status(405).json({ message: "Method not allowed" });
}
