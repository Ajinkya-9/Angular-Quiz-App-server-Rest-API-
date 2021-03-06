const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');
//get a list of ninjas from database 
router.get('/ninjas',function(req,res,next){
 Ninja.find({}).then(function(ninjas){
   res.send(ninjas);
 }); 
});


//add a new ninja to database 
router.post('/ninjas',function(req,res,next){
    Ninja.create(req.body).then(function(ninja){
      res.send(ninja);
    }).catch(next);
    
  });

  //update a ninja in database 
router.put('/ninjas/:id',function(req,res,next){
      // Ninja.findByIdAndUpdate({_id:req.params.id}.req.body).then(function(ninja){
      //  Ninja.findOne({_id:req.params.id}).then(function(){
      //   res.send(ninja);
      //  });
        
      // });
     Ninja.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(ninja){
      res.send(ninja);
     });

  });


  //deleat a ninja from database
router.delete('/ninjas/:id',function(req,res,next){
 Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
  }); 
 
  });


  module.exports = router;