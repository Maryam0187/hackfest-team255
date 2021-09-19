
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const key = "hackfest"
var models = require('../../models');
var User = models.User;


router.post('/register', (req, res) => {
    let {
        firstName,
        lastName,
        email,
        password,
        confirm_password,
        role,
        gender,
        DOB,
        phone,
        cnic,
        address
    } = req.body
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }
    let newUser = new User({
        firstName,
        lastName,
        email,
        password,
        confirm_password,
        role,
        gender,
        DOB,
        phone,
        cnic,
        address
    });
    // Check for the Unique Email
    User.findOne({
        where: {
            email: req.body.email}
    }).then(user => {
        if (user) {
            console.log("sdfdsfsdfsd ", user)
            return res.status(400).json({
                msg: "Email is already registred. Did you forgot your password."
            });
        }
        else{
            newUser.archive = true
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Hurry! User is now registered."
                });
            });
        }
    });   
});



router.post('/login', (req, res) => {
        User.findOne({where: {
            email: req.body.email}
        }).then(user => {
          
            if (!user) {
                return res.status(404).json({
                    msg: "Username is not found.",
                    success: false
                });
            }
        
            if (req.body.password == user.password) {
                // User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id: user.id,
                    lastName: user.lastName,
                    firstName: user.firstName,
                    email: user.email
                }

                console.log("payyyy" , payload)
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: "Hurry! You are now logged in."
                    });
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
            
    });
    
});

module.exports = router;