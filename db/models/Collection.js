import mongoose from "mongoose";
import "./Flashcard";

const { Schema } = mongoose;

const collectionSchema = new Schema({
  title: { type: String, required: true, minlength: 2 },
  
  collections: { type: [Schema.Types.ObjectId], ref: "Flashcard" },
  question: { type: String },
  answer: { type: String },

});

const Collection =
  mongoose.models.Collection || mongoose.model("Collection", collectionSchema);

export default Collection;
