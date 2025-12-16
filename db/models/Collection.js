import mongoose from "mongoose";
import "./Flashcard";

const { Schema } = mongoose;

const collectionSchema = new Schema({
  title: { type: String, required: true, minlength: 3 },
  imageUrl: {
    width: { type: String, required: true },
    height: { type: String, required: true },
    url: { type: String, required: true },
    public_id:{type: String, required:true},
  },
  collections: { type: [Schema.Types.ObjectId], ref: "Flashcard" },
  question: { type: String },
  answer: { type: String },
 
});

const Collection =
  mongoose.models.Collection || mongoose.model("Collection", collectionSchema);

export default Collection;