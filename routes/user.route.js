const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

//Sign Up

router.post('/signup', function(req, res) {
	console.log("route is called",req);
   bcrypt.hash(req.body.password, 10, function(err, hash){
      if(err) {
         return res.status(500).json({
            error: err
         });
      }
      else {
         const user = new User({
            userName: req.body.userName,
            password: hash    
         });
         user.save().then(function(result) {
            console.log(result);
            res.status(200).json({
               success: 'New user has been created'
            });
         }).catch(error => {
            res.status(500).json({
               error: err
            });
         });
      }
   });
});

// Sign In

router.post('/signin', function(req, res){
   User.findOne({userName: req.body.username}).exec().then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result){
         if(err) {
            return res.status(401).json({
               failed: 'Unauthorized Access'
            });
         }
         else if(result) {
			 
			const JWTToken = jwt.sign({
				userName: user.userName,
				_id: user._id
			},
			'secret',
		   {
				expiresIn: '2h'
		   });
		   return res.status(200).json({
			 success: 'Welcome to the JWT Auth',
			 token: JWTToken
		   });
			 
         } else {
			  return res.status(401).json({
               failed: 'Unauthorized Access'
            });
		 }
      });
   }).catch(error => {
      res.status(500).json({
         error: "username not found"
      });
   });;
});

module.exports = router;