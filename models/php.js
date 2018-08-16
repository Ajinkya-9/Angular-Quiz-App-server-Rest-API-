const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crete ninja  Schema & Model

const PHPSchema = new Schema({
    question:{type:String},
    options:{
        a: { type: String},
        b: { type: String},
        c: { type: String},
        d: { type: String},
    },
    
    ans:{type: String}
  
   


    // add geo location
});

const PHP = mongoose.model('php',PHPSchema);

module.exports = PHP;