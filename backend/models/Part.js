import mongoose from "mongoose";
const partSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgsrc: {
        type: String,
        required: true,
    },

}, {timestamps: true});

const Parts = mongoose.model('Part', partSchema);
export default Part;