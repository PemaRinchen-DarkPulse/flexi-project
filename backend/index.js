const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config({ path: path.resolve(__dirname, './config/.env') });

const app = express();
const port = process.env.PORT || 5000;
const mongo_url = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

// Connect with MongoDB
mongoose.connect(mongo_url)
    .then(() => console.log("MongoDB Connection Success"))
    .catch(err => console.error("MongoDB Connection Failed:", err));

// Routes
app.use('/', require('./routes/auth'));

// Start Server
app.listen(port, () => console.log(`Server running on port ${port}`));
