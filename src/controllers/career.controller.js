import Career from '../models/careers.js';

export const getAllCareers = async (req, res) => {
    try {
        const careers = await Career.find();
        res.json(careers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCareer = async (req, res) => {
    try {
        const newCareer = new Career(req.body);
        const savedCareer = await newCareer.save();
        res.status(201).json(savedCareer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getCareerById = async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (!career) return res.status(404).json({ message: 'Career not found' });
        res.json(career);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatedCareer = async (req, res) => {
    try {
        const career = await Career.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!career) return res.status(404).json({ message: 'Career not found' });
        res.json(career);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCareer = async (req, res) => {
    try {
        const career = await Career.findByIdAndDelete(req.params.id);
        if (!career) return res.status(404).json({ message: 'Career not found' });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
