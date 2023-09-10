import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    name: String,
    category: String,
    description: String,
},{
    timestamps: true,
    versionKey: false
})

export default model('Movie', movieSchema)