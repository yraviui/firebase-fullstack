import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: {
        type: String,
        default: "To Do",
        enum: ["To Do", "In Progress", "Done"],
    }
},
    { timestamps: true }
)
export default mongoose.model('todos', todoSchema)
