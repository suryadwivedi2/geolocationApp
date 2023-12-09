const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose=require('mongoose')
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());



const port = process.env.PORT;

//routes
const storeroute = require('./routes/stores');

app.use('/api/v1/stores', storeroute)

mongoose.connect('mongodb+srv://bcae208924402018:Surya%402001@cluster0.ieth7oj.mongodb.net/storeLocator?retryWrites=true&w=majority')
    .then(result => {
        app.listen(port, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`))
    })
    .catch(err => console.log(err));