import mongoose from "mongoose";

const { Schema } = mongoose;

const flashcardSchema = new Schema({
  name: { type: String },
});

const Flashcard =
  mongoose.models.Flashcard || mongoose.model("Flashcard", flashcardSchema);

export default Flashcard;