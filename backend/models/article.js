const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    link: {type: String, required: true},
    heading: {type: String, required: true}
});

module.exports = mongoose.model('Article', articleSchema);