import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// or we can write : require('dotenv').config();

import Routes from "./routes/Routes";



dotenv.config();
const app = express();

//db connection
mongoose.connect(process.env.DATABASE ,{
    useNewUrlParser :true,
    useUnifiedTopology :true,
})
.then(()=> console.log('DB Connection Successful'))
.catch((err) => console.log('DB Connection Error',err))

app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Routes);

const port =process.env.PORT || 5003;

app.listen(port ,() => console.log(`Server is running on port ${port}`));