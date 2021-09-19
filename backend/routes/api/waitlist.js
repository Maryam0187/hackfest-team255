
const express = require('express');
const router = express.Router();
var models = require('../../models');
var User = models.WaitList;
var patient = models.Patient;


router.post('/add', (req, res) => {
    let {
        patient_id,
        remarks,
        status,
        entryTime
    } = req.body

    let newPatient = new User({
        patient_id,
        remarks,
        status,
        entryTime
    });

  patient.findOne({
    where: {
        id: req.body.patient_id}
  }).then(patient =>{
      if(patient) {
        newPatient.archive = true
        newPatient.save().then(patient => {
            return res.status(201).json({
                success: true,
                msg: "new patient created"
            });
        });
      }else{
        return res.status(400).json({
            msg: "Patient not found"
        });
      }
  } )
     
    
     
});


module.exports = router;