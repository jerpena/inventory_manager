import express from "express";
import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'get parts' });
});

router.post('/', (req, res) => {
    res.status(200).json({ message: 'add parts' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `update parts ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `delete parts ${req.params.id}` });
});

export default router;