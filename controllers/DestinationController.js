import Destination from '../models/Destination.js';

export const getDestination = async (req, res) => {
    try {
        const destination = await Destination.find();
        res.send(destination);
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong' });
    }
};

export const getOneDestination = async (req, res) => {
    try {
        const { Id } = req.params;
        const destination = await Destination.findOne({ Id });
        if (!destination) {
            res.status(404).send('Destination not found');
        } else {
            res.send(destination);
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

export const postDestination = async (req, res) => {
    const body = req.body;
    try {
        const destination = new Destination(body);
        await destination.save();
        res.send('Destination saved successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};

export const putDestination = async (req, res) => {
    const { Id } = req.params;
    const { Name, Description } = req.body;
    try {
        await Destination.findOneAndUpdate({ Id }, { Name, Description }, { new: true });
        res.status(200).send('Destination updated successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};

export const deleteDestination = async (req, res) => {
    try {
        const destination = await Destination.findOne({ Id: req.params.Id });
        if (!destination) return res.status(404).send('Destination not found');
        await destination.deleteOne();
        res.status(200).send('Destination deleted successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};
