import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostcardSchema = new Schema({
  text: String,
});

const PostcardModel = mongoose.model("Postcard", PostcardSchema);

export default PostcardModel;
