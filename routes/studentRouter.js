var express = require('express');
const app = express();
var router = express.Router();

const Student = require('../models/student');
//to get list of all students
// localhost:3000/api/students

router.get('/', function(req, res){
    Student.find({})
        .populate("college", "name -_id")
        .then(function(student){
            res.json(student);
        }
        
        ) ;
});

//to save a student in the database

router.post('/', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var reg_no = req.body.reg_no;
    var college_id = req.body.college_id;

    var student = new Student({
        name : name,
        email : email,
        reg_no : reg_no,
        college_id : college_id
    });

    student.save().then(function() {
        res.json(student);
    });
});

// to get student using given id

router.get('/:id', function(req, res){
    Student.findOne({}, function(err, student){
        res.json(student);
    });
});

// to delete a  student from database
// localhost:3000/api/students/id

router.delete('/:id', function(req, res) {
    Student.findOneAndDelete({ _id : req.params.id } , function(err,student){
        res.send('Deleted successfully');
    });
});

module.exports = router;
