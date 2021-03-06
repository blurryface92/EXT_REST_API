//hey there! this is a excerise tracker rest api
//ver 1.0
//made by: blurryface

//importing express
const express = require("express");
const bodyParser = require("body-parser");

//initializing express app
const app = express()
const port = process.env.PORT || 5000

//middlewares
const cors = require("cors");
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: false }));


//actually using dotenv to import the environment variables
require('dotenv').config();


//somekind of security protocol idk
app.use(cors());
app.use(express.json());

//importing the URI form dotenv
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{
    useNewUrlParser:true
})


//connecting to the database perhaps
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully!")
})

//importing the routers from the routes folder
const exercisesRouter = require("./routes/exercise");
const usersRouter = require("./routes/users");

app.use("/exercises",exercisesRouter);
app.use("/users",usersRouter);

//listening to the port OwO
app.listen(port,()=>{
    console.log(`Server is running at localhost:${port}/`)
})