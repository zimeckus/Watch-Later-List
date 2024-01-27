const mongoose = require('mongoose');

const watchLaterSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
        },
    platform: { 
        type: String,
        required: true
        },
    genre: { 
        type: String,
        required: true
        },
    link: { 
        type: String,
        required: true
        },
});

module.exports = mongoose.model('WatchLater', watchLaterSchema);
