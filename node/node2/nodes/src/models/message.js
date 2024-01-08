import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
});

const Message = mongoose.model("Message", messageSchema);

export default Message;