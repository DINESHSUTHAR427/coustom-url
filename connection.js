const mongoose = require("mongoose");

function connectedMongooseDb (url){
   return mongoose.connect(url);
}

module.exports = {
    connectedMongooseDb,
}