import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
    {
        
    },{timestamps: true}
)

export const Sub_Todo = mongoose.model("Sub_Todo", subTodoSchema)