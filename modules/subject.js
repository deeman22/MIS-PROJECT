//const { ISO_8601 } = require('moment');
var mongoose = require('mongoose');

const DB = "mongodb+srv://Bist_Man:qwerty123@cluster0.uurus.mongodb.net/nitjDB?retryWrites=true&w=majority";
mongoose.connect(DB , {useNewUrlParser: true});
var conn = mongoose.Collection;

// var subjectSchema = new mongoose.Schema({
//     id: {type: String, required: true, unique: true },
//     name: {type: String, required: true },
//     exam_date: {type: Date, required: true, default: Date.now() }
// });

var examSchema= new mongoose.Schema({
    semester : {type: Number, min: 1, max:6, required: true, unique: true},
    subjects : [{   
        id: {type: String, required: true, unique: true },
        name: {type: String, required: true },
        exam_date: {type: Date, required: true, default: Date.now() }
    }] 
   
});


var Exam = mongoose.model('exam', examSchema);

// const e1 = new Exam({
//     semester: 2,
//     subjects: [
//         { id: "MA3201", name: "Numerical Methods ", exam_date: "2021-12-02" },
//         { id: "CA3201", name: "Object Oriented Programming using C++", exam_date: "2021-12-03" },
//         { id: "CA3202", name: "Data Structures", exam_date: "2021-12-04" },
//         { id: "CA3203", name: "Object Oriented Analysis and Design", exam_date: "2021-12-07" },
//         { id: "CA3204", name: "Operating System", exam_date: "2021-12-09" },
//         { id: "CA3205", name: "Numerical Computing Lab", exam_date: "2021-12-11" },
//         { id: "CA3206", name: "Data Structures Lab", exam_date: new Date("2021-12-13T00:00:00") },
//     ]
// });
 
//e1.save();

// Exam.findOneAndUpdate({ 'subjects.id': 'CA3301' }, { 'subjects.exam_date': new Date("2021-12-13T00:00:00")}, function (err) {

//     if (err) console.log(err);
//     else console.log("updated");    
// });

module.exports = Exam;