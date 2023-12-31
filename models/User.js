const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    roles : {
        User : {
            type : Number,
            default : 1000
        },
        Editor : Number,
        Admin : Number
    },
    password : {
        type : String,
        required : true
    },
    refreshToken : String
});

module.exports = mongoose.model('User',userSchema)