const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crete ninja  Schema & Model

const PARTICIPENTSchema = new Schema({
    name:{
        type:String},
        email:{type:String},
        score:{type:String},
        timeSpent:{type:String}
  
   


    // add geo location
});

const PARTICIPENT = mongoose.model('participent',PARTICIPENTSchema);

module.exports = PARTICIPENT;