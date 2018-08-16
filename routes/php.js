const express = require('express');
const router = express.Router();
const PHP = require('../models/php');
//get a list of ninjas from database 
router.get('/phps',function(req,res,next){
PHP.find({}).then(function(phps){
   res.send(phps);
}); 
});


//add a new ninja to database 
router.post('/phps',function(req,res,next){
    PHP.create(req.body).then(function(php){
      res.send(php);
    }).catch(next);
    
  });

  //update a ninja in database 
router.put('/phps/:id',function(req,res,next){
      // Ninja.findByIdAndUpdate({_id:req.params.id}.req.body).then(function(ninja){
      //  Ninja.findOne({_id:req.params.id}).then(function(){
      //   res.send(ninja);
      //  });
        
      // });
     PHP.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(php){
      res.send(php);
     });

  });


  //deleat a ninja from database
router.delete('/phps/:id',function(req,res,next){
 PHP.findByIdAndRemove({_id: req.params.id}).then(function(php){
    res.send(php);
  }); 
 
  });


  module.exports = router;