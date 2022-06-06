import mongoose from "mongoose";

const partSchema = mongoose.Schema({
    partName: {
        type: String,
        required: [true, 'is required']
    },
    description: {
        type: String,
        required: [true, 'is required']
    },
    vzwPartId: {
        type: String,
    },
    graybarPartId: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
});

export default mongoose.model('Part', partSchema);