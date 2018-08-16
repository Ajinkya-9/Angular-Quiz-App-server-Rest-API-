const express = require('express');
const router = express.Router();
const PARTICIPENT = require('../models/participent');
//get a list of ninjas from database 
router.get('/participents',function(req,res,next){
PARTICIPENT.find({}).then(function(participent){
   res.send(participent);
 }); 
});


//add a new ninja to database 
router.post('/participents',function(req,res,next){
    PARTICIPENT.create(req.body).then(function(participent){
      res.send(participent);
    }).catch(next);
    
  });

  //update a ninja in database 
router.put('/participents/:id',function(req,res,next){
      // Ninja.findByIdAndUpdate({_id:req.params.id}.req.body).then(function(participent){
      //  Ninja.findOne({_id:req.params.id}).then(function(){
      //   res.send(participent);
      //  });
        
      // });
      PARTICIPENT.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(participent){
      res.send(participent);
     }).catch(next);;

  });


  //deleat a ninja from database
router.delete('/participents/:id',function(req,res,next){
    PARTICIPENT.findByIdAndRemove({_id: req.params.id}).then(function(participent){
    res.send(participent);
  }).catch(next);; 
 
  });


  module.exports = router;