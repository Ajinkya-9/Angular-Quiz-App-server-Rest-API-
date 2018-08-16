const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crete ninja  Schema & Model

const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,'name filed is required'],
        },
    rank:{
        type:String,
        },
    available:{
        type:Boolean,
        default:false
    }
    // add geo location
});

const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;