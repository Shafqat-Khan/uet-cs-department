const express = require("express");

const Article = require('../models/article');

const router = express.Router();


router.post("", (req, res, next)=>{
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

router.get("", (req, res, next) => {
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
router.put("/:id", (req, res, next) => {
  const article = {
    _id: req.body.id,
    link: req.body.link,
    heading: req.body.heading
  };

  Article.updateOne({ _id: req.params.id }, article)
    .then(result => {
      res.status(200).json({ message: "Article Updated!" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

router.delete("/:id", (req, res, next)=>{
    Article.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: "Article Deleted!"});
    });
});

router.get("/:id", (req, res, next)=> {
    Article.findById(req.params.id).then(article => {
        if(article){
            res.status(200).json(article);
            console.log("Hekko");
        } else {
            res.status(404).json({message: "Article not found"});
        }
    })
});

module.exports = router;