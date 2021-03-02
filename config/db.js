'use strict';
const mongoose = require(`mongoose`);

const {Schema, model} = mongoose;
const {DB_URL, DB_NAME} = require('../config/consts.json');

const discussionSchema = new Schema({
    film: {type:String, required:true },  //, min length etc
    rating: String,
    comment: String
});

const Discussion = model('Discussion',discussionSchema);

mongoose.connect(`${DB_URL}`, {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if(err){
        console.error(err);
    }else{
        console.log(`Connected`);
    }
});

module.exports= {"Discussion":Discussion};