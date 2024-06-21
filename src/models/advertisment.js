const mongoose=require('mongoose');

const advertisementSchema= new mongoose.Schema(
    {
        company_name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        job_type: {
            type: String,
            required: true
        },
        location:{
            type: String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        description:{
            type: String,
            required:true
        }
    },
    { timestamps: true }// This option enables automatic management of createdAt and updatedAt fields
);

const Advertisment = mongoose.model('Advertisment', advertisementSchema);

 module.exports=Advertisment;