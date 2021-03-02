'use strict';
const mongoose = require(`mongoose`);

const {Schema, model} = mongoose;
const {DB_URL} = require('../config/consts.json');

const discussionSchema = new Schema({
    film: {type:String, required:true },  //, min length etc
    rating: String,
    comment: String
});

const filmSchema = new Schema({
    title: {type:String, required:true },  //, min length etc
    description: {type:String, required:true },
    picture: {type: String, required:true},
    releaseYear: {type: String, required: true},
    newRelease:{type: Boolean, requried:true}
});

const Discussion = model('Discussion',discussionSchema);

const Film = model('Film', filmSchema)

mongoose.connect(`${DB_URL}`, {useNewUrlParser:true, useUnifiedTopology:true}, (err) =>{
    if(err){
        console.error(err);
    }else{
        console.log(`Connected`);
    }
});

module.exports= {"Discussion":Discussion};
module.exports = {"Film":Film};
