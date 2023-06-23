const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT;
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/stuff', require('./routes/stuffRoute'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));