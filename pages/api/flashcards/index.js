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
    const productData = request.body;
    await Flashcard.create(productData);

    response.status(201).json({ status: "Product created." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}