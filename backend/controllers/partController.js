// @desc    Get parts
// @route   GET /api/parts
// @access  Private
export const getParts = (req, res) => {
    res.status(200).json({ message: 'get parts' });
};

// @desc    Add a part
// @route   POST /api/parts
// @access  Private
export const addPart = (req, res) => {
    res.status(200).json({ message: 'add parts' });
};

// @desc    Update a part
// @route   PUT /api/parts
// @access  Private
export const updatePart = (req, res) => {
    res.status(200).json({ message: `update parts ${req.params.id}` });
};

// @desc    Delete a part
// @route   DELETE /api/parts
// @access  Private
export const deletePart = (req, res) => {
    res.status(200).json({ message: `delete parts ${req.params.id}` });
};

