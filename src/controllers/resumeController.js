const Resume = require('../models/Resume');

exports.submitResume = async(req, res) =>{
    const{student_name, student_email, cv} =req.body;

try{
    const newResume = new Resume({
        student_name,
        student_email,
        cv
    });

    await newResume.save();
    res.status(200).send('Data Recived!');
    }
    catch(error){
        res.status(500).send('There was an error submitting the data!')
    }
};

