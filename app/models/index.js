const dbConfig = require("../config/db");
const mongoose = require("mongoose");


module.exports = {
    mongoose,
    url: dbConfig.url,
    product: require('./products.models.js')(mongoose),
    video: require('./videos.model.js')(mongoose),
    comment: require('./comments.model.js')(mongoose)
}