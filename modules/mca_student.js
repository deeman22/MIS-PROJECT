var mongoose = require('mongoose');

const DB = "mongodb+srv://Bist_Man:LNK2207myP@cluster0.uurus.mongodb.net/nitjDB";
mongoose.connect(DB , {useNewUrlParser: true});
var conn = mongoose.Collection;

var mca_studentSchema= new mongoose.Schema({
    id: {type: String, required: true, unique: true },
    first_name: {type: String, required: true },
    last_name: {type: String, required: true },
    password: {type: String, required: true },
    semester:{ type: Number, min: 1, max:6, required: true },
});


var mca_student = mongoose.model('mca_student', mca_studentSchema);
module.exports = mca_student;
// module.exports.findMcaStudent = findMcaStudent;