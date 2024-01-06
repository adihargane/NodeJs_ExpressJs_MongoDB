const mongoose = require('mongoose');
require("dotenv").config();

const db = async () => {
    try {
        const connection = await mongoose.connect( process.env.MONGODB_URL );
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = db;

// if mongodb://localhost:27017/dbName this url is not working then use 0.0.0.0 or 127.0.0.1 instead of localhost