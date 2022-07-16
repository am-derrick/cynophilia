import mongoose from "mongoose";

// Mongoose Schema for MongoDB
const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('cards', cardSchema);
