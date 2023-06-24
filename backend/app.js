const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const articlesRoutes = require("./routes/articles")

const app = express();
// 3jaD6HsqwuGgXh2P
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
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH,DELETE, OPTIONS");

    next();
});

app.use("/api/article", articlesRoutes);

module.exports = app;
