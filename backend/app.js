const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Article = require('./models/article');

const app = express();

mongoose.connect("mongodb+srv://uet:BLnIbdLz6OcrAFmp@cluster0.9ytwxcj.mongodb.net/uet-articles?retryWrites=true&w=majority")
    .then(() =>{
        console.log('Connected to Database');
    })
    .catch(() => {
        console.log("Connection Failed");
    });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

    next();
});


app.post("/api/article", (req, res, next)=>{
    const article = new Article({
        link: req.body.link,
        heading: req.body.heading
    });
    article.save().then(createdArticle =>{
        res.status(201).json({
            message: "Post Added!!!",
            articleId: createdArticle._id
        });
        
    });
});

app.get("/api/article", (req, res, next) => {
    Article.find().then(
        documents => {
            res.status(200).json({
                message: "Data fetched!",
                articles: documents,
            });
        }
    )
    .catch(() => {
        console.log("Unable to fetch Data");
    });
});

app.delete("/api/article/:id", (req, res, next)=>{
    Article.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: "Post Deleted!"});
    });
});

module.exports = app;
