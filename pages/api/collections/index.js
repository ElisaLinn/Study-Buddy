import dbConnect from "@/db/connect";
import Collection from "@/db/models/Collection";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const collection = await Collection.find().populate("collections");
    response.status(200).json(collection);
    return;
  }
   response.status(405).json({ status: "Method not allowed." });
}