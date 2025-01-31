// Imports 
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const initiateDBConnection = require('./config/db');

const userRouter = require('./routes/UserRoutes');
const adminRouter = require('./routes/adminRoutes');
const doctorRouter = require('./routes/doctorRoutes');
const SolvedcomplaintsRouter  = require('./routes/SolvedcomplaintsRoutes');
const complaintRouter = require('./routes/complaintRoutes');
const predictionRouter = require('./routes/predictionRouter');


// Let the dotenv package read and parse environment variables in the ./config/.env file
dotenv.config({ 
    path: './config/.env' 
});

// Access the port environment variable using process.env
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/doctor', doctorRouter);
app.use('/Solvedcomplaints', SolvedcomplaintsRouter);
app.use('/complaint', complaintRouter);
app.use('/prediction', predictionRouter);

//app.use('/auth', userAccountRouter);

app.listen(PORT, async() => {
    console.log(`Server has been started and is listening to port ${PORT}`);
    // Call the asynchronous function to initiate DB connection once the server starts listening 
    await initiateDBConnection();
});

