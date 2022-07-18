import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    manufacturer: {
        type: String
    },
    vzw: {
        type: String
    },
    graybar: {
        type: String
    },
});

const partSchema = mongoose.Schema({
    partName: {
        type: String,
        required: [true, 'is required'],
    },
    description: {
        type: String,
        required: [true, 'is required'],
    },
    comment: {
        type: String,
    },
    imgSrc: {
        type: String,
    },
    imn: [itemSchema],
});

export default mongoose.model('Part', partSchema);