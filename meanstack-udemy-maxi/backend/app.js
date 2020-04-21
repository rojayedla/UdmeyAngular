const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var cors = require('cors');

app.use(cors());

const postsRoutes = require("./routes/posts");

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://roja:sairam123@cluster0-tjvij.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Database connection failed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res,next) => {
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;


