const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const cors = require('cors');



dotenv.config();
const app = express();

app.use(express.json());

connectDB();
app.use(cors({ origin: '*' }));
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/subjects', subjectRoutes);  


const PORT = process.env.PORT || 5003;

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server running on port ${PORT}`);
    });
    connectDB().then(() => {
        console.log('MongoDB Connected');
    }).catch((err) => {
        console.error('MongoDB connection failed:', err.message);
    });