import dbConnect from "@/db/connect";
import Collection from "@/db/models/Collection";
import Flashcard from "@/db/models/Flashcard";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const collections = await Collection.find();
      
      // Für jede Collection die Anzahl der Flashcards ermitteln
      const collectionsWithCount = await Promise.all(
        collections.map(async (collection) => {
          const flashcardCount = await Flashcard.countDocuments({
            collectionId: collection._id
          });
          
          const correctCount = await Flashcard.countDocuments({
            collectionId: collection._id,
            isCorrect: true
          });
          
          return {
            ...collection.toObject(),
            flashcardCount: flashcardCount,
            correctCount: correctCount
          };
        })
      );
      
      response.status(200).json(collectionsWithCount);
      return;
    } catch (error) {
      response.status(500).json({ status: "Error loading collections" });
      return;
    }
  }

  if (request.method === "POST") {
    try {
      const collectionData = request.body;

      if (!collectionData.title) {
        response.status(400).json({ status: "Title is required" });
        return;
      }

      const newCollection = await Collection.create(collectionData);
      response.status(201).json(newCollection);
      return;
    } catch (error) {
      response
        .status(400)
        .json({ status: "Error creating collection", error: error.message });
      return;
    }
  }

  if (request.method === "PUT") {
    const { id } = request.query;

    await Collection.findByIdAndUpdate(id, title);
    response.status(200).json({ status: "OK!" });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
