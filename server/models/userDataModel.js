const mongoose = require("mongoose");

const Schema = require("mongoose").Schema;

const userDataSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    number: {
        type: Number,
    },
    message : {
        type : String
    }
})

module.exports = mongoose.model("userData" , userDataSchema);