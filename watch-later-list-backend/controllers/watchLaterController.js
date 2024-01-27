const WatchLater = require('../models/watchLater');

exports.createRecord = async (req, res) => {
    try {
        const record = new WatchLater(req.body);
        await record.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllRecords = async (req, res) => {
    try {
        const records = await WatchLater.find();
        res.json(records);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const record = await WatchLater.findByIdAndUpdate(id, req.body, { new: true });
        res.json(record);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteRecord = async (req, res) => {
    try {
        const { id } = req.params;
        await WatchLater.findByIdAndDelete(id);
        res.json({ message: 'Record deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
