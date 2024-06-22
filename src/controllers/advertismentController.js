const Advertisement = require('../models/advertisment');

exports.submitAdvertisement = async (req, res) => {
  const { company_name, title, duration, job_type, location, email, description } = req.body;
  const newAdvertisement = new Advertisement({ company_name, title, duration, job_type, location, email, description });

  try {
    await newAdvertisement.save();
    res.status(201).send('Post submitted successfully!');
  } catch (err) {
    res.status(500).send('Error submitting post.');
  }
};

exports.displayAdvetisements = async(req, res) =>{
  try{
    const adds = await Advertisement.find();
    res.json(adds);
  }
  catch(err){
    res.status(500).json({messahe:err.message});
  }
};