const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/watch_later_list', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));
db.on('error', err => console.error('MongoDB connection error:', err));
