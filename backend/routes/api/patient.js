
const express = require('express');
const router = express.Router();
var models = require('../../models');
var User = models.Patient;


router.post('/add', (req, res) => {
    let {
        name,
        age,
        DOB,
        gender,
        guardian_name,
        guardian_relation,
        guardian_cnic,
        guardian_phone,
        guardian_mobile,
        address
    } = req.body

    let newPatient = new User({
        name,
        age,
        DOB,
        gender,
        guardian_name,
        guardian_relation,
        guardian_cnic,
        guardian_phone,
        guardian_mobile,
        address
    });
    
    if(age>= 6.5){
        newPatient.archive = true
        newPatient.save().then(patient => {
            return res.status(201).json({
                success: true,
                msg: "new patient created"
            });
        }); 
    }else{
        return res.status(400).json({
            msg: "invalid age"
        });
    }
     
});

router.get('/all', (req, res) => {
       
    try{
        User.findAll().then(patient=>{
            return res.status(201).json({
                success: true,
                data: patient
            });
        })

    }catch(err){
        return res.status(500).json({
            msg: err
        });
    }
});

router.get('/get/:id', (req, res) => {
       
    try{
        get_user_by_id(req.params.id).then(patient=>{
            return res.status(201).json({
                success: true,
                data:patient
            });
        }).catch((err=>{
            return res.status(500).json({
                msg: err
            });
        }))

    }catch(err){
        return res.status(500).json({
            msg: err
        });
    }
});

router.put('/update', (req, res) => {

    User.findOne({
    where: {
        id: req.body.id}
  }).then(patient =>{
      if(patient) {
        User.update(req.body,{where: {id: req.body.id}}).then(updatedPatient => {
            get_user_by_id( req.body.id).then(patient=>{
                return res.status(201).json({
                    success: true,
                    data:patient
                });
            }).catch((err=>{
                return res.status(500).json({
                    msg: err
                });
            }))
        });
      }else{
        return res.status(400).json({
            msg: "Patient not found"
        });
      }
  } )
});

function get_user_by_id(id) {
    return new Promise((resolve, reject) => {
        User.findOne({
            where: {id: id},
        }).then(user => {
            if(user){
                resolve(user);
            } else {
                reject('Patient not found');
            }
        }).catch(err => {
            reject({message:err});
        });
    } );
}

module.exports = router;