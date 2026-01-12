import dbConnect from "@/db/connect";
import Flashcard from "@/db/models/Flashcard";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const categories = await Flashcard.find();
    response.status(200).json(categories);
    return;
  }



  if (request.method === "POST") {
    try {
      const flashcardData = request.body;


      if (
        !flashcardData.question ||
        !flashcardData.answer ||
        !flashcardData.collectionId
      ) {
        response
          .status(400)
          .json({ status: "Question, answer, and collectionId are required" });
        return;
      }

      const newFlashcard = await Flashcard.create(flashcardData);
      response.status(201).json(newFlashcard);
      return;
    } catch (error) {
      response.status(500).json({ status: "Error creating flashcard", error: error.message });
      return;
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
