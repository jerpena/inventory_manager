import asyncHandler from "express-async-handler";
import Part from '../models/partModel.js';

// @desc    Get parts
// @route   GET /api/parts
// @access  Private
export const getParts = asyncHandler(async (req, res) => {
    const parts = await Part.find();
    res.status(200).json(parts);
});

// @desc    Add a part
// @route   POST /api/parts
// @access  Private
export const addPart = asyncHandler(async (req, res) => {
    if (!req.body.partName) {
        res.status(400);
        throw new Error('Please add a partName');
    }

    const part = await Part.create({
        partName: req.body.partName,
        description: req.body.description,
        vzwPartId: req.body.vzwPartId,
        graybarPartId: req.body.graybarPartId,
        imgUrl: req.body.imgUrl,
    });
    res.status(200).json(part);
});

// @desc    Update a part
// @route   PUT /api/parts
// @access  Private
export const updatePart = asyncHandler(async (req, res) => {
    const options = { new: true };
    const part = await Part.findById(req.params.id);

    if (!part) {
        res.status(404);
        throw new Error('Part not found');
    }
    const updatedPart = await Part.findByIdAndUpdate(req.params.id, req.body, options);

    res.status(200).json(updatedPart);
});

// @desc    Delete a part
// @route   DELETE /api/parts
// @access  Private
export const deletePart = asyncHandler(async (req, res) => {
    const part = await Part.findById(req.params.id);

    if (!part) {
        res.status(404);
        throw new Error('Part not found');
    }
    await part.remove();

    res.status(200).json({ id: req.params.id });
});

