const express = require('express');
const app = express();
const bodyParser = require("body-parser");

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

app.post("/api/posts", (req, res, next) =>{
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: "Post added successfully"
    })
});
app.use("/api/posts", (req, res, next) =>{
    const posts = [
        {id: "111eddddd", title: "First server side post", content: "This is comming from the server"},
        {id: "122eddddd", title: "Second server side post", content: "This is comming from the server"}

    ];
    res.status(200).json({
        message: "Posts fetched succesfully",
        posts: posts
    });
    
});
// app.use((req, res, next) =>{
//     console.log('hello from express');     
// });

module.exports = app;


