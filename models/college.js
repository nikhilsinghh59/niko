var mongoose = require('mongoose');

var collegeSchema = new mongoose.Schema({
    name : {
        type : String

    }
});

const college = mongoose.model('college',collegeSchema);

module.exports = college;
