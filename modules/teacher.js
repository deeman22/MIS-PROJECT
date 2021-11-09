var mongoose = require('mongoose');

const DB = "mongodb+srv://Bist_Man:LNK2207myP@cluster0.uurus.mongodb.net/nitjDB";
mongoose.connect(DB , {useNewUrlParser: true});
var conn = mongoose.Collection;

var teacherSchema= new mongoose.Schema({
    id: {type: String, required: true, unique: true },
    first_name: {type: String, required: true },
    last_name: {type: String, required: true },
    password: {type: String, required: true },
});


var teacher = mongoose.model('teacher', teacherSchema);
module.exports = teacher;