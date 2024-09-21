const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
    {
    student_name:
    {
        type: String,
        required: true
    },
    student_email:
    {
        type: String,
        required: true
    },
    cv:{
        type:String,
        required:true
    }
});
const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;