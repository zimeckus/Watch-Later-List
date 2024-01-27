const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const watchLaterRoutes = require('./routes/watchLaterRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/watch_later_list', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));
db.on('error', err => console.error('MongoDB connection error:', err));

app.use('/api/records', watchLaterRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
