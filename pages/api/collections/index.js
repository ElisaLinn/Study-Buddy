import dbConnect from "@/db/connect";
import Collection from "@/db/models/Collection";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const collections = await Collection.find();
    response.status(200).json(collections);
    return;
  }
   response.status(405).json({ status: "Method not allowed." });
}