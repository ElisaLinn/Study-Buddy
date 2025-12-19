import dbConnect from "@/db/connect";
import Collection from "@/db/models/Collection";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const collections = await Collection.find();
    response.status(200).json(collections);
    return;
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
